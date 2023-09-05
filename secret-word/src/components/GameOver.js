import "./GameOver.css";

const GameOver = ({retry, score}) => {
    return (
        <div>
            <h2>Fim de jogo</h2>
            <h3>A sua pontuacao foi: <span>{score}</span></h3>
            <button type="submit" onClick={retry}>Novo Jogo</button>
        </div>
    )
}

export default GameOver