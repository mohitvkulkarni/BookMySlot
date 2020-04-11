import firebase from "firebase/app";
import "firebase/firestore";
import CONSTANTS from "../constants";
import UserService from "./UserService";

firebase.initializeApp(CONSTANTS.FirebaseConfig);

const userCollectionRef = firebase.firestore().collection("users");
var docRef;

const writeUserData = (name, verifier, verifierId, account) => {
  var docRef = userCollectionRef.doc(verifier + "_" + verifierId);

  docRef.get().then(doc => {
    if (doc.exists) {
      // console.log(doc.data());
    } else {
      docRef.set({
        name,
        verifier,
        verifierId,
        account,
        gasBalance: 0
      });
    }
  });
};

const getPaymentMethod = () => {
  const { userInfo } = UserService.getUserInfo();

  docRef = userCollectionRef.doc(userInfo.verifier + "_" + userInfo.verifierId);

  return docRef.get().then(doc => {
    const data = doc.data();
    return data.paymentMethod;
  });
};

const savePublicToken = publicToken => {
  return getPaymentMethod().then(paymentMethod => {
    docRef.set(
      {
        paymentMethod: {
          publicToken,
          ...paymentMethod
        }
      },
      { merge: true }
    );
  });
};

const savePaymentMethod = paymentMethodId => {
  return getPaymentMethod().then(paymentMethod => {
    docRef.set(
      {
        paymentMethod: {
          paymentMethodId,
          ...paymentMethod
        }
      },
      { merge: true }
    );
  });
};
const saveAddressETH = accountETH => {
  return getPaymentMethod().then(paymentMethod => {
    docRef.set(
      {
        paymentMethod: {
          accountETH,
          ...paymentMethod
        }
      },
      { merge: true }
    );
  });
};

export default {
  writeUserData,
  savePaymentMethod,
  savePublicToken,
  saveAddressETH,
  getPaymentMethod
};
