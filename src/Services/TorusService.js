import UserService from "./UserService";
import web3Obj from "../utils";
import CONSTANTS from "../constants";
import tokenAbi from "human-standard-token-abi";

const makeTransaction = (accountETH, amount) => {
  return new Promise((res, rej) => {
    const torusAccount = UserService.getUserAccount();

    web3Obj.torus
      .setProvider({ host: CONSTANTS.TorusProviderHost })
      .finally(() => {
        const localWeb3 = web3Obj.web3;
        const instance = new localWeb3.eth.Contract(
          tokenAbi,
          CONSTANTS.WithdrawContractAddress
        );
        const value = Math.floor(
          parseFloat(amount) * 10 ** parseFloat(18)
        ).toString();
        instance.methods.transfer(accountETH, value).send(
          {
            from: torusAccount
          },
          (err, hash) => {
            if (err) rej(err);
            else res(hash);
          }
        );
      });
  });
};

export default {
  makeTransaction
};
