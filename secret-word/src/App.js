import './App.css'; // CSS
import { useCallback, useEffect, useState } from "react"; // REACT
import { wordsList } from "./data/words"; // DATA
import StartScreen from './components/StartScreen'; // Components
import Game from "./components/Game";
import GameOver from "./components/GameOver";

const stages = [
    {id: 1, name: "start"},
    {id: 2, name: "game"},
    {id: 3, name: "end"}
];

function App() {

    const [gameStage, setGameStage] = useState(stages[0].name);
    const [words] = useState(wordsList);

    const [pickedWord, setPickedWord] = useState("");
    const [pickedCategory, setPickedCategorty] = useState("");
    const [letters, setLetters] = useState([]);

    const pickWordAndCategory = () => {
        const categories = Object.keys(words);

        // pick a random category
        const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

        // pick a random word
        const word = words[category][Math.floor(Math.random() * words[category].length)];

        return {word, category};
    }

    // starts the game
    const startGame = () => {

        // pick random word and category
        const { word, category } = pickWordAndCategory();

        // create an array of letters
        let wordLetters = word.split("");
        wordLetters = wordLetters.map((l) => l.lowerCase())

        // fill states
        setPickedWord(word);
        setPickedCategorty(category);
        setLetters(wordLetters);

        setGameStage(stages[1].name);
    }

    // process the letter input
    const verifyLetter = () => {
        setGameStage(stages[2].name);
    }

    // restarts the game
    const retry = () => {
        setGameStage(stages[0].name)
    }

    return (
        <div className="App">
            {gameStage === 'start' && <StartScreen startGame={startGame} />}
            {gameStage === 'game' && <Game verifyLetter={verifyLetter} />}
            {gameStage === 'end' && <GameOver retry={retry} />}            
        </div>
    );
}

export default App;
