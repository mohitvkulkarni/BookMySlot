import CONSTANTS from "../constants";
import CryptoJS from "crypto-js";

const calcAuthSigHash = url_body => {
  let hash = CryptoJS.HmacSHA256(url_body, CONSTANTS.WYRE_TOKEN);
  return CryptoJS.enc.Hex.stringify(hash);
};

const createPaymentMethod = publicToken => {
  const timestamp = new Date().getTime() + "000";
  const finalUrl = CONSTANTS.URLS.createPaymentMethod + timestamp;
  const body = JSON.stringify({
    publicToken,
    paymentMethodType: "LOCAL_TRANSFER",
    country: "US"
  });

  return fetch(finalUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": CONSTANTS.WYRE_APIKEY,
      "X-Api-Signature": calcAuthSigHash(finalUrl + body)
    },
    body
  })
    .then(res => res.json())
    .catch(err => console.log(err));
};

const attachBlockchain = paymentMethodId => {
  const timestamp = new Date().getTime() + "000";
  const finalUrl = CONSTANTS.URLS.attachBlockchain(paymentMethodId) + timestamp;
  const body = JSON.stringify({ blockchain: "ETH" });

  return fetch(finalUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": CONSTANTS.WYRE_APIKEY,
      "x-api-signature": calcAuthSigHash(finalUrl + body)
    },
    body
  })
    .then(res => res.json())
    .catch(err => console.log(err));
};

export default {
  createPaymentMethod,
  attachBlockchain
};
