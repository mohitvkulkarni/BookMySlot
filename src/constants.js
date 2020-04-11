const EthScanApiKey = "MGVGMSXFYIZT4SM49DMMTIM6BRH7HYYJWZ";
const EthScanURL = "https://api.etherscan.io/api";
const DAIContractAddress = "0x2b6e68c0be79bd6fd2cc3a55f04cce9c502e71e5";

const SampleTransactions = [
  {
    blockNumber: "8202023",
    timeStamp: "1563819581",
    hash: "0x5afb8990f9ba7ecb7cb9ccc7c5522177f6d5e321ca18f070378ba416a71d8284",
    nonce: "62",
    blockHash:
      "0x6cd95e6b24fa9c5d8e33839890f379d8b91cad490b2639570f16fa06f58eaa3e",
    transactionIndex: "60",
    from: "0x19c16bfadf1e2412ec98afa694ee71a0ddcd309c",
    to: "0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a",
    value: "1000000000000000",
    gas: "21000",
    gasPrice: "4800000000",
    isError: "0",
    txreceipt_status: "1",
    input: "0x",
    contractAddress: "",
    cumulativeGasUsed: "3894335",
    gasUsed: "21000",
    confirmations: "1461295"
  }
];

const FirebaseConfig = {
  apiKey: "AIzaSyCnd6KTsO7Ca5Wg1OpG_ybaMk7xzS_apsQ",
  authDomain: "zefi-backend.firebaseapp.com",
  databaseURL: "https://zefi-backend.firebaseio.com",
  projectId: "zefi-backend",
  storageBucket: "zefi-backend.appspot.com",
  messagingSenderId: "695208931488",
  appId: "1:695208931488:web:d497f698f188d53f8199c5"
};
const TorusProviderHost = "mainnet"; // "mainnet" "rinkeby";
const SendWyreDomain = "pay.sendwyre.com" ;//"https://api.sendwyre.com"; // "https://api.sendwyre.com"; "testwyre"

const WithdrawContractAddress = "0x6b175474e89094c44da98b954eedeac495271d0f";
const WYRE_APIKEY = "AK-AVEG99YM-ZGCLTLCG-CHUJ33ZU-WNMRYJN8";
const WYRE_TOKEN = "SK-YBZ9L7WE-ZJE9DUED-LXXV6BAR-UL8JWRNF";
const ACCOUNT_ID = "AC_AE9YBVQCZG3";

const URLS = {
  createPaymentMethod: SendWyreDomain + "/v2/paymentMethods?timestamp=",
  attachBlockchain: paymentMethodId =>
    `${SendWyreDomain}/v2/paymentMethod/${paymentMethodId}/attach?timestamp=`
};
const BuildEnvTorus = "production"; // testing  production;

const CONSTANTS = {
  EthScanApiKey,
  SampleTransactions,
  EthScanURL,
  TorusProviderHost,
  WithdrawContractAddress,
  FirebaseConfig,
  WYRE_APIKEY,
  WYRE_TOKEN,
  BuildEnvTorus,
  URLS,
  DAIContractAddress,
  ACCOUNT_ID
};

export default CONSTANTS;
