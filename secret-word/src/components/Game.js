import "./Game.css";

const Game = ({verifyLetter}) => {
    return (
        <div className="game">
            <p className="points">
                <span>Pontuacao: 000</span>
            </p>

            <h1>adivinhe a palavra: </h1>

            <h3 className="tip">
                Dica sobre a palavra: <span>DICA...</span>
            </h3>

            <div className="wordContainer">
                <span className="letter">a</span>
                <span className="blankSquare"></span>
            </div>

            <div className="letterContainer">
                <p>Tente adivinar uma letra da palavra:</p>
                <form>
                    <input type="text" name="letter" maxLength={1} required />
                    <button>
                        Jogar
                    </button>
                </form>
            </div>

            <div className="wrongLettersContainer">
                <p>Letras utilizadas</p>
                <span>a</span>
                <span>h</span>
            </div>
        </div>
    )
}

export default Game