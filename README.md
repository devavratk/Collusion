<img src="https://github.com/kirito-k/Collusion/blob/master/htdocs/img/logo_collusion_white-bkg.svg" alt="Collusion logo" width="500" height="80">


## Table of contents:
* [Introduction](#introduction)
* [Built With](#built-with)
* [Screenshots](#screenshots)
* [Creators](#creators)
* [Citation](#citation)


## Introduction:
<p>
Collusion is a turn-based, interactive three player game. It’s a combination of "Capture the flag" and "Minesweeper". In the Collusion, instead of having multiple flags for every team, we have a single flag placed in the center of the three grids and it’s a race to the center. We designed the game mechanics to promote colluding with other players to prevent the leader from reaching the center first.
</p>

**Each turn player can either:**
* Move own agent 1 space forward or diagonal
* Place a bomb on in one of the other player's region
* Reveal the closest bomb placed in one of the other player's region (if any)

**Rules:**
* At max one bomb per row can be placed.
* If you hit a bomb, you go back to your last positon and the bomb is revealed to you. 
* If you reveal a bomb to another player, they cant bomb you for one full turn-cycle.
* If you place a block that already contains a hidden bomb you loose your turn.

**Win condition:**
* First player to reach the flag wins.

## Built With:
Solidity, Remix IDE, Skale, Geth, Truffle, SolC, Web3js, Ganash, Javascript

## Screenshots:
<img src="https://github.com/kirito-k/Collusion/blob/master/htdocs/img/screen_1.png" alt="Screenshot 1: Intro" />
<img src="https://github.com/kirito-k/Collusion/blob/master/htdocs/img/screen_2.png" alt="Screenshot 2: Start" />
<img src="https://github.com/kirito-k/Collusion/blob/master/htdocs/img/screen_3.png" alt="Screenshot 3: Game Play" />
<img src="https://github.com/kirito-k/Collusion/blob/master/htdocs/img/screen_4.png" alt="Screenshot 4: Bombed" />

## Creators
**DJ Rosenbaum**
- <https://github.com/djrosenbaum>

**Brent Lagerman**
- <https://github.com/condensed-io>

**Jacob Shiach**
- <https://github.com/kingjacob>

**Devavrat Kalam**
- <https://github.com/kirito-k>

## Citation
<p align="center">
  <a href="https://getbootstrap.com/">
    <img src="https://ethnewyork.com/src/assets/images/ETHNewYork-logo-large.svg" alt="Bootstrap logo" width="250" height="200">
    
<img src="https://user-images.githubusercontent.com/35889562/57982791-e49f6a80-7a17-11e9-91af-3919e80c619d.jpg" alt="Collusion logo" width="300" height="200">
    <img src="https://user-images.githubusercontent.com/35889562/57982867-e61d6280-7a18-11e9-9b0a-639c3a044942.jpeg" alt="Bootstrap logo" width="250" height="200">
  </a>
</p>

