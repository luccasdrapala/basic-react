import "./Game.css";

const Game = ({verifyLetter}) => {
    return (
        <div>
            <h2>Game</h2>
            <button type="submit" onClick={verifyLetter}>Finalizar Game</button>
        </div>
    
  )
}

export default Game