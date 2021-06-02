import { endPoints } from "../config/api";

const { default: axios } = require("axios");

export default async function get_bitclout_price() {
  let url = "https://blockchain.info/ticker";

  let response = (await axios.get(url)).data;

  const latest_bitcoin_price = response.USD.last;
  let url2 = endPoints.getSatoshiRate;

  const satoshi_per_bit_clout_exchange_rate = (await axios.get(url2)).data
    .satoshiRate;

  const bitclout_price =
    (satoshi_per_bit_clout_exchange_rate * latest_bitcoin_price) / (10 ^ 8);

  return bitclout_price;
}
