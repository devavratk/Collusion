import collusion from '../contracts/collusion.sol';

export default async function setupGameState() {
	console.log('setting up the game state');
	game.address = collusion.address;
	game.contract = getContract();
	// game.balance = await getBalance();
	// game.info = await getInfo();
	game.currentGameId = await getCurrentGameId();
	game.pastEvents = await getPastEvents();
	game.playerAddress = await web3.eth.getCoinbase();
	game.players = [];
	game.positions = [];
	game.action = 'move';

	console.log('past events:', game.pastEvents);
}

function getContract() {
  return new web3.eth.Contract(collusion.interface, game.address);
}

async function getBalance() {
	const balance = await web3.eth.getBalance(game.address);

	return balance;
}

async function getInfo() {
	// return await game.contract.methods.getInfo().call();
}

async function getCurrentGameId() {
	return await game.contract.methods.currentGameId().call();
}

async function getPastEvents() {
	const totalPlayers = await game.contract.methods.getTotalPlayers().call();

	console.log('total players:', totalPlayers);
	console.log('current round id:', game.currentGameId);

	if (totalPlayers > 3) {
		return [];
	}
	return await game.contract.getPastEvents("allEvents", {
	    fromBlock: 0,
	    toBlock: 'latest',
	    filter: {
	    	_gameId: game.currentGameId
	    }
	});
}