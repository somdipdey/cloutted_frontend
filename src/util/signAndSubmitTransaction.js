// import axios from "axios";

const headers = {
  authority: "bitclout.com",
  accept: "application/json, text/plain, */*",
  "sec-ch-ua-mobile": "?1",
  "user-agent":
    "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Mobile Safari/537.36",
  "content-type": "application/json",
  "Access-Control-Allow-Origin": "*",
  origin: "https://bitclout.com",
  "sec-fetch-site": "same-origin",
  "sec-fetch-mode": "cors",
  "sec-fetch-dest": "empty",
  "accept-language": "en-US,en;q=0.9",
};

export const signAndSubmitTransaction = async (
  ReaderPublicKeyBase58Check,
  LikedPostHashHex
) => {
  const { TransactionHex } = await createLikeStateless(
    ReaderPublicKeyBase58Check,
    LikedPostHashHex
  );

  await submitTransaction(TransactionHex);
};

const submitTransaction = async (TransactionHex) => {
  var axios = require("axios");
  var data = JSON.stringify({
    TransactionHex,
  });

  var config = {
    method: "post",
    url: "http://144.126.138.12:17001/api/v0/submit-transaction",
    headers: {
      "Content-Type": "application/json",
      Cookie: "INGRESSCOOKIE=6c5288c5b1760a67cf6948459970a9f6",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

const createLikeStateless = async (
  ReaderPublicKeyBase58Check,
  LikedPostHashHex
) => {
  var axios = require("axios");
  var data = JSON.stringify({
    ReaderPublicKeyBase58Check,
    LikedPostHashHex,
    IsUnlike: false,
    MinFeeRateNanosPerKB: 1000,
  });

  var config = {
    method: "post",
    url: "http://144.126.138.12:17001/api/v0/create-like-stateless",
    headers,
    data: data,
  };

  let res;

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));

      res = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });

  return res;
};
