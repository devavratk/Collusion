
      export default {
        interface: [
  {
    "constant": true,
    "inputs": [],
    "name": "MAX_PLAYERS",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x4411b3eb"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getTotalPlayers",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x4529cae7"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "position",
        "type": "uint256[2]"
      }
    ],
    "name": "move",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x47cd150d"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "currentGameId",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x536a3ddc"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getPlayers",
    "outputs": [
      {
        "name": "",
        "type": "address[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x8b5b9ccc"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "start",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xbe9a6555"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "player",
        "type": "uint256"
      }
    ],
    "name": "reveal",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xc2ca0ac5"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "player",
        "type": "uint256"
      },
      {
        "name": "column",
        "type": "uint256[2]"
      }
    ],
    "name": "place",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xf28bb934"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "_gameId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "_playerAddress",
        "type": "address"
      }
    ],
    "name": "OnJoin",
    "type": "event",
    "signature": "0x97dc0664567158a9c170d5b082e7ae2a58fae10c3e07f2cfb6fb86fe6dcfb88a"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "_gameId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "_playerAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "_position",
        "type": "uint256[2]"
      }
    ],
    "name": "OnMove",
    "type": "event",
    "signature": "0x174f14afba076c794752d4ab5ede95f4aa352e40367d7d321477d7fd532761fa"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "_gameId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "_playerAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "_player",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "_position",
        "type": "uint256[2]"
      }
    ],
    "name": "OnPlace",
    "type": "event",
    "signature": "0x7027c1bb3b8482b2aefc9449e0cc4a30b7c180dd7d3b5f8baad4d9686d8302a2"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "_gameId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "_playerAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "_player",
        "type": "uint256"
      }
    ],
    "name": "OnReveal",
    "type": "event",
    "signature": "0xd8fe51dcf4f6d2f9edd88781a2eda7da81209867825e1ae938f73106a61c4b9f"
  }
],
        address: '0xe44f47486046E39A3Dfbdb8764D17009aa65a885'
      }
    