export default function setupDOM() {
	displayFeed();

	listen();

	getFutureEvents();
}

function hideGroup(groupId) {
	const group = document.querySelectorAll('[data-group="' + groupId + '"]');

	[].forEach.call(group, function(div) {
	  div.style.display = "none";
	});
}

function showGroup(groupId) {
	const group = document.querySelectorAll('[data-group="' + groupId + '"]');

	[].forEach.call(group, function(div) {
	  div.style.display = "block";
	});
}

// function hydrateBankroll() {
// 	const contractBalance = new BN(game.info._contractBalance);
// 	const bankroll = fromWeiToEth(contractBalance);

// 	document.querySelector('.bankroll span').innerHTML = bankroll;
// }

// function hydrateInput() {
// 	const min = parseFloat(fromWeiToEth(game.info._minCost)).toFixed(3);
// 	const max = parseFloat(fromWeiToEth(game.info._maxCost)).toFixed(3);

// 	const input = document.querySelector('.min-max input');
// 	input.setAttribute('min', min);
// 	input.setAttribute('max', max);
// }

// function hydrateMin() {
// 	const min = parseFloat(fromWeiToEth(game.info._minCost)).toFixed(3);

// 	document.querySelector('.min .value').innerHTML = `${min} ETH`;
// }

// function hydrateMax() {
// 	const max = parseFloat(fromWeiToEth(game.info._maxCost)).toFixed(3);
	
// 	document.querySelector('.max .value').innerHTML = `${max} ETH`;
// }

// function hydrateSetPlayerName() {
// 	const cost = fromWeiToEth(game.info._nameCost);

// 	document.querySelector('.vanity-name button .cost').innerHTML = `${cost} ETH`;
// }

// function hydratePostMessage() {
// 	const cost = fromWeiToEth(game.info._messageCost);

// 	document.querySelector('.post button .cost').innerHTML = `${cost} ETH`;
// }

// function generateInfoBox() {
// 	document.querySelector('.info-box').insertAdjacentHTML('beforeend', 
// 		`<table>
// 			<tbody>
// 				<tr>
// 					<td>Contract</td>
// 				</tr>
// 				<tr>
// 					<td class="address"><a href="https://ropsten.etherscan.io/address/${game.address}">${game.address}</a></td>
// 				</tr>
// 			</tbody>
// 		</table>`
// 	);
// }

function listen() {
	document.querySelector('button[data-action="start"]').addEventListener('click', start);

	const buttons = document.querySelectorAll('.row div[data-position]');

	for (const button of buttons) {
	  button.addEventListener('click', function(event) {
	  	takeAction(event);
	  });
	}

	document.querySelector('.action-selection [data-action="move"]').addEventListener('click', selectActionMove);
	document.querySelector('.action-selection [data-action="place"]').addEventListener('click', selectActionPlace);
	document.querySelector('.action-selection [data-action="reveal"]').addEventListener('click', selectActionReveal);
}

async function start() {
	// call method on contract to dig
	const from = await web3.eth.getCoinbase();
	const to = game.address;
	const data = game.contract.methods.start().encodeABI();
	const value = new BN('0');

	web3.eth.sendTransaction({
	  from,
	  to,
	  value,
	  data
	}).on('transactionHash', (hash) => {
		// console.log('transaction hash:', hash);
	}).on('receipt', (receipt) => {
		// location.reload();
		// console.log('transaction receipt:', hash);
	}).on('confirmation', (nonce, receipt) => {
		// console.log('confirmation receipt:', receipt);
	}).on('error', console.error); // If a out of gas error, the second parameter is the receipt.;

	document.querySelector('button[data-action="start"]').style.display = 'none';
}

async function takeAction(e) {
	console.log('take action adsf:', e.target);
	// get coordinate
	const coord = e.target.dataset.position;
	console.log('coord', coord);

	console.log('game action', game.action);

	if (game.action === 'move') {
		await sendMove(coord);
	}

	if (game.action === 'place') {

	}

	if (game.action === 'reveal') {

	}
}

async function sendMove(position) {
	console.log('sendMove', position);

	const from = await web3.eth.getCoinbase();
	const to = game.address;
	const data = game.contract.methods.move(position.split(',')).encodeABI();
	const value = new BN('0');

	web3.eth.sendTransaction({
	  from,
	  to,
	  value,
	  data
	});
}

function selectActionMove(e) {
	setActiveAction(e.target);
}

function selectActionPlace(e) {
	setActiveAction(e.target);
}

function selectActionReveal(e) {
	setActiveAction(e.target);
}

function setActiveAction(selectedAction) {
	const actions = document.querySelectorAll('.action-selection button');

	[].forEach.call(actions, (action) => {
		action.classList.remove('active');
	});

	selectedAction.classList.add('active');

	game.action = selectedAction.dataset.action;
}

function getFutureEvents() {
	game.contract.events.allEvents((error, event) => {
		displayEvent(event);
	});
}

function displayFeed() {
	const markup = game.pastEvents.map((pastEvent) => {
		const {event, transactionHash, returnValues} = pastEvent;

		if (returnValues._gameId !== game.currentGameId) {
			return;
		}

		return `<div class="event" data-event="${event}">
			${createCard(pastEvent)}
		</div>`;
	}).reverse();

	document.querySelector('.event-feed').innerHTML += markup.join('');
}

function displayEvent(event) {
	console.log('displayEvent:', event);

	let markup = `<div class="event" data-event="${event.event}">
		${createCard(event)}
	</div>`;

	console.log('markup:', markup);

	document.querySelector('.event-feed').innerHTML = markup + document.querySelector('.event-feed').innerHTML;
}

function createCard({event, transactionHash, returnValues}) {

	console.log('create card:', event);

	// const date = new Date(parseInt(event.timeStamp) * 1000);
	// <div class="timestamp">${date.toDateString()} - ${date.toLocaleTimeString()}</div>

	if(event === 'OnJoin') {
		return createOnJoin();
	} else if (event === 'OnMove') {
		return createOnMove();
	} else if (event === 'OnPlace') {
		return createOnPlace();
	}

	function createOnJoin() {
		const { _playerAddress, _gameId } = returnValues;
		game.players.push(toCheckSumAddress(_playerAddress));

		if (game.players.indexOf(toCheckSumAddress(game.playerAddress)) > -1) {
			document.querySelector('button[data-action="start"]').style.display = 'none';
			document.querySelector('.action-selection').style.display = '';
		}



		// if (game.players.length === 3) {
		// 	let counter = 1;

		// 	game.positions = game.players.map((player) => {
		// 		if (player === toCheckSumAddress(game.playerAddress)) {
		// 			return 0;
		// 		} else {
		// 			counter++;
		// 			return counter - 1;
		// 		}
		// 	});
		// }

		return `<div>${_playerAddress.substring(0, 21)}</div><div>is Ready to Collude</div>`;
	}

	function createOnMove() {
		const { _playerAddress, _position } = returnValues;

		console.log('create on move:', _playerAddress, _position);

		return `<div>${_playerAddress.substring(0, 21)}</div><div>Moved to ${_position}</div>`;
	}

	// function createOnPlace() {
	// 	const { _playerAddress, _position } = returnValues;

	// 	return `<div>${_playerAddress.substring(0, 21)}</div><div>Moved to ${_position}</div>`;
	// }

	// function createOnReveal() {
	// 	const { _playerAddress, _position } = returnValues;

	// 	return `<div>${_playerAddress.substring(0, 21)}</div><div>Moved to ${_position}</div>`;
	// }
}

function fromWeiToEth(weiAmount) {
	return web3.utils.fromWei(weiAmount, 'ether').toString().substring(0,7);
}

function toCheckSumAddress(address) {
	return web3.utils.toChecksumAddress(address);
}

function getRandom(_random) {
	const randomMap = {
		'0': '0.00x',
		'1': '0.20x',
		'2': '0.40x',
		'3': '0.60x',
		'4': '0.80x',
		'5': '1.00x',
		'6': '1.25x',
		'7': '1.50x',
		'8': '1.75x',
		'9': '2.00x',
	}

	return randomMap[_random];
}


// async function killin_it() {
// 	const from = await web3.eth.getCoinbase();
// 	const to = game.address;
// 	const data = game.contract.methods.kill().encodeABI();
// 	const value = new BN('0');

// 	web3.eth.sendTransaction({
// 	  from,
// 	  to,
// 	  value,
// 	  data
// 	}).on('transactionHash', (hash) => {
// 		console.log('transaction hash:', hash);
// 	}).on('receipt', (receipt) => {
// 		location.reload();
// 	}).on('confirmation', (nonce, receipt) => {
// 		console.log('confirmation receipt:', receipt);
// 	}).on('error', console.error); // If a out of gas error, the second parameter is the receipt.;
// }






