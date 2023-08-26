import "./GameOver.css";

const GameOver = ({retry}) => {
    return (
        <div>
            <h2>Retry</h2>
            <button type="submit" onClick={retry}>Retry</button>
        </div>
    )
}

export default GameOver