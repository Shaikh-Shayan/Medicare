import web3 from "./web3";

//const address = '0x7B56A9A6e7c20d865D7486Da64310BEE0bC8Ee1a';
//const address = '0x34d848c48EEc33C040Ea2Ea0B5F30dF90972d1f3';
//const address = '0x9ee9ca71adb5bf25eab0a6383300e1a94a45b8b4';
const address = "0x2Dd9D634afdd2766BD32E3c3973f38057AF5aAFC";
const abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "sid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
    ],
    name: "acceptdist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "changeOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "sid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
    ],
    name: "decline",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "sell",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "sid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lid",
        type: "uint256",
      },
    ],
    name: "setdistdetails",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_medName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "sid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "expiryd",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "expirydate",
        type: "string",
      },
    ],
    name: "setmed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "sid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_dist",
        type: "address",
      },
    ],
    name: "setretaildetails",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_role",
        type: "string",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    name: "setuser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "checkex",
    outputs: [
      {
        internalType: "bool",
        name: "res",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getmed",
    outputs: [
      {
        internalType: "string",
        name: "medName",
        type: "string",
      },
      {
        internalType: "string",
        name: "mname",
        type: "string",
      },
      {
        internalType: "string",
        name: "dname",
        type: "string",
      },
      {
        internalType: "string",
        name: "rname",
        type: "string",
      },
      {
        internalType: "bool",
        name: "soldstatus",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "expsts",
        type: "bool",
      },
      {
        internalType: "string",
        name: "expdate",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "readd",
        type: "address[]",
      },
      {
        internalType: "string",
        name: "medname",
        type: "string",
      },
    ],
    name: "stockcheck",
    outputs: [
      {
        internalType: "uint24[]",
        name: "st",
        type: "uint24[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
export default new web3.eth.Contract(abi, address);
