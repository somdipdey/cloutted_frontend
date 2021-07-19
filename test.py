import hashlib
import hmac
import requests


encryptedSeedHex = "fdc8afbcd6103c364e2fd18c7f2166a6ec92e13a24c55ad7eaeb66c341212d6e1d830f015935a7a70d17e501c1ce8f34c0ad86ff06f8a2828913fd2e1df51b73"

transactionHex = "01347f5ef9e0207a5de2c6a4c4aafab39f221ed571f23c64edf64453263f9c55ac0001032454f88c369649a4ae66303f09984228f10e2d402c8d0ad7d81baeb26fb3abaff8a486060a217f5c25828e02ca1cde5d9c4c949e48f0bafae13b6256e72f589f6e8cd47804780021032454f88c369649a4ae66303f09984228f10e2d402c8d0ad7d81baeb26fb3abaf0000"


def get_hmac(key, data):
    return hmac.new(key, data, hashlib.sha256).digest()


def hmac_drbg(entropy, string):
    material = entropy + string
    K = b"\x00" * 32
    V = b"\x01" * 32

    K = get_hmac(K, V + b"\x00" + material)
    V = get_hmac(K, V)
    K = get_hmac(K, V + b"\x01" + material)
    V = get_hmac(K, V)

    temp = b""
    while len(temp) < 32:
        V = get_hmac(K, V)
        temp += V

    return temp[:32]

#######


g = (0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798,
     0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8)
p = 0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f
n = 0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141


def point_add(point1, point2):
    # Returns the result of point1 + point2 according to the group law.
    if point1 is None:
        return point2
    if point2 is None:
        return point1

    x1, y1 = point1
    x2, y2 = point2

    if x1 == x2 and y1 != y2:
        return None

    if x1 == x2:
        m = (3 * x1 * x1) * pow(2 * y1, -1, p)
    else:
        m = (y1 - y2) * pow(x1 - x2, -1, p)

    x3 = m * m - x1 - x2
    y3 = y1 + m * (x3 - x1)
    result = (x3 % p, -y3 % p)

    return result


def scalar_mult(k, point):
    # Returns k * point computed using the double and point_add algorithm.
    result = None
    addend = point

    while k:
        if k & 1:
            # Add.
            result = point_add(result, addend)
        # Double.
        addend = point_add(addend, addend)
        k >>= 1

    return result

#######


def to_DER(r, s):  # Signature to DER format
    r = bytes.fromhex(r)
    s = bytes.fromhex(s)
    if r[0] > 0x80:
        r = bytes.fromhex("00")+r
    if s[0] > 0x80:
        s = bytes.fromhex("00")+s
    res = bytes.fromhex("02"+hex(len(r))[2:]) + \
        r + bytes.fromhex("02"+hex(len(s))[2:]) + s
    res = bytes.fromhex("30"+hex(len(res))[2:]) + res

    return res.hex()


def Sign_Transaction(seedHex, TransactionHex):
    s256 = hashlib.sha256(hashlib.sha256(
        bytes.fromhex(TransactionHex)).digest()).digest()
    drbg = hmac_drbg(entropy=bytes.fromhex(seedHex), string=s256)
    k = int.from_bytes(drbg, 'big')
    kp = scalar_mult(k, g)
    kpX = kp[0]
    r = kpX % n
    s = pow(k, -1, n) * (r * int(seedHex, 16)+int(s256.hex(), 16))
    s = s % n
    signature = to_DER(hex(r)[2:].zfill(64), hex(s)[2:].zfill(64))
    signed_transaction = TransactionHex[:-2] + \
        hex(len(bytearray.fromhex(signature)))[2:] + signature

    return signed_transaction


def submitTransaction(signedTransactionHex):
    payload = {
        "TransactionHex": signedTransactionHex
    }

    print(payload)

    response = requests.post(
        "https://bitclout.com/api/v0/submit-transaction", json=payload)

    return response.status_code


print(Sign_Transaction(encryptedSeedHex, transactionHex))

res = submitTransaction(Sign_Transaction(encryptedSeedHex, transactionHex))
print(res)
