import CONSTANTS from "../constants";
import UserService from "./UserService";

const url = "https://api.etherscan.io/api";
const getTransactionList = () => {
  return fetch(
    url +
      `?module=account&action=txlist&address=${UserService.getUserAccount()}&startblock=0&endblock=99999999&sort=asc&apikey=${
        CONSTANTS.EthScanApiKey
      }`
  )
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.status === "1") {
        return data.result;
      }

      return CONSTANTS.SampleTransactions;
    });
};

const getBalance = account => {
  return fetch(
    url +
      `?module=account&action=tokenbalance&contractaddress=${
        CONSTANTS.DAIContractAddress
      }&address=${account || UserService.getUserAccount()}&tag=latest&apikey=${
        CONSTANTS.EthScanApiKey
      }`
  )
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.status === "1") {
        const balance = data.result / 10 ** 18;
        UserService.setBalance();
        return balance;
      }

      return 0;
    });
};

export default { getTransactionList, getBalance };
