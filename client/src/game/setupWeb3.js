export default async function setupWeb3() {
  if (window.ethereum) {
    console.log('window.ethereum');
    window.web3 = new Web3(window.ethereum);
  } else if (window.web3) {
    console.log('window.web3');
    window.web3 = new Web3(Web3.givenProvider);
  } else {
    console.log('INSTALL METAMASK');
    window.web3 = new Web3();
  }

  if(window.web3.currentProvider && window.web3.currentProvider.isConnected()) {
    console.log('successfully connected');
    await window.web3.eth.net.getNetworkType((err, data) => {
      if (err) {
        game.network = '';
      } else {
        game.network = data;
      }
    })
  } else {
    console.log("provider not connected");
    game.network = '';
  }
  console.log('game network:', game.network);

  window.BN = window.web3.utils.BN;
}