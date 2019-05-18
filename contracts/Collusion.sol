pragma solidity 0.5.8;


contract Collusion {
    
    // Emit event when a player joins
    event OnJoin(
        uint256 indexed _gameId,
        address _playerAddress
    );
    
    // Emit event when a player moves
    event OnMove(
        uint256 indexed _gameId,
        address _playerAddress,
        uint256[2] _position
    );
    
    // Emit event when a player places a trap
    event OnPlace(
        uint256 indexed _gameId,
        address _playerAddress,
        uint256 _player,
        uint256 _position
    );
    
    // Emit event when player decides to reveal a trap
    event OnReveal(
        uint256 indexed _gameId,
        address _playerAddress,
        uint256 _player
    );
    
    uint256 public constant MAX_PLAYERS = 3;
    uint256 public currentGameId;
    
    mapping (uint256 => Game) private games;
    
    // struct Player {
    //     uint256[1] position;
    //     uint256[27][1] positions;
    // }
    
    struct Game {
        // uint256 playerTurn;
        address[] players;
        // mapping (address => Player) playerbook;
    }
    
    function start()
        public
    {
        if (getTotalPlayers() > MAX_PLAYERS) {
            currentGameId = currentGameId + 1;
        }
        games[currentGameId].players.push(msg.sender);
        
        emit OnJoin(currentGameId, msg.sender);
    }
    
    function move(uint256[2] memory position)
        public
    {
        emit OnMove(currentGameId, msg.sender, position);
    }
    
    function place(uint256 player, uint256 column)
        public
    {
        emit OnPlace(currentGameId, msg.sender, player, column);
    }
    
    function reveal(uint256 player)
        public
    {
        emit OnReveal(currentGameId, msg.sender, player);
    }
    
    function getTotalPlayers()
        public
        view
        returns(uint256)
    {
        return games[currentGameId].players.length;
    }
    
    function getPlayers()
        public
        view
        returns(address[] memory)
    {
        return games[currentGameId].players;
    }
}
