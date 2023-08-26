import './StartScreen.css';

const StartScreen = ({startGame}) => {
    return (
        <div className='start'>
            <h1>Secret Word</h1>
            <p>Clique no botao abaixo para jogar</p>
            <button type="button" onClick={startGame}>JOGAR</button>
        </div>
    )
}

export default StartScreen;