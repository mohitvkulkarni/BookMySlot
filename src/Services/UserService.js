import FireBaseService from "../Services/FireBaseService";

let userDetails = {
  account: "0x380968A435A61e1f01807cbCC41c3C023E021112",
  balance: "0",
  userInfo: {
    name: "Naman Kheterpal",
    profileImage:
      "https://lh3.googleusercontent.com/a-/AOh14GjGEobrXJkU4sgsDCll1OTVTrL1NWjfazlOgYGcYw",
    email: "namankheterpal@gmail.com",
    verifier: "google",
    verifierId: "namankheterpal@gmail.com"
  },
  buildEnv: "testing"
};
const setUserInfo = userInfo => {
  userDetails = userInfo;
  console.log(userDetails);
  FireBaseService.writeUserData(
    userDetails.userInfo.name,
    userDetails.userInfo.verifier,
    userDetails.userInfo.verifierId,
    userDetails.account
  );
};

const setBalance = balance => {
  userDetails.balance = parseFloat(balance).toFixed(6);
};

const getBalance = () => {
  return parseFloat(userDetails.balance).toFixed(6);
};

const getUserName = () => {
  return userDetails.userInfo.name;
};

const getUserInfo = () => {
  return userDetails;
};

const getUserAccount = () => {
  return userDetails.account;
};

export default {
  setUserInfo,
  getUserInfo,
  getUserAccount,
  getUserName,
  setBalance,
  getBalance
};
