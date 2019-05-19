import setupWeb3 from './game/setupWeb3';
import setupGameState from './game/setupGameState';
import setupDOM from './game/setupDOM';

window.game = window.game || {};

async function startTheEngine() {
	await setupWeb3();
	await setupGameState();
	setupDOM();
}

startTheEngine();