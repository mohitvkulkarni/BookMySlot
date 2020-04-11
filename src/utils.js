import Web3 from "web3";
import Torus from "@toruslabs/torus-embed";
import CONSTANTS from "./constants";

const web3Obj = {
  web3: new Web3(),
  torus: {},
  setweb3: function(provider) {
    const web3Inst = new Web3(provider);
    web3Obj.web3 = web3Inst;
  },
  initialize: async function(buildEnv) {
    const torus = new Torus();
    await torus.init({
      buildEnv: buildEnv || "production",
      network: { host: CONSTANTS.TorusProviderHost },
      showTorusButton: false,
      enabledVerifiers: {
        facebook: false, // default: true
        reddit: false,
        twitch: false,
        discord: false
      }
    });
    //await torus.login();

    await torus.login({verifier:'google'});
    web3Obj.setweb3(torus.provider);
    web3Obj.torus = torus;
    sessionStorage.setItem("pageUsingTorus", buildEnv);
  }
};

export default web3Obj;
