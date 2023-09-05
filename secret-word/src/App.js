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

    const [guessedLetters, setGuessedLetters] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);
    const [guesses, setGuesses] = useState(3);
    const [score, setScore] = useState(0);

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
        wordLetters = wordLetters.map((l) => l.toLowerCase())

        // fill states
        setPickedWord(word);
        setPickedCategorty(category);
        setLetters(wordLetters);

        setGameStage(stages[1].name);
    }

    // process the letter input
    const verifyLetter = (letter) => {

        const normalizedLetter = letter.toLowerCase();

        // check if letter has already been utilized
        if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
            return;
        } else {
            // push guessed letter or remove a guess
            if (letters.includes(normalizedLetter)) {
                // letra adivinhada
                setGuessedLetters((actualGuessedLetters) => [
                    ...actualGuessedLetters, normalizedLetter
                ]);
            } else {
                setWrongLetters((actualWrongLetters) => [
                    ...actualWrongLetters, normalizedLetter
                ]);

                setGuesses((actualGuesses) => actualGuesses - 1);
            }
        }
    };

    const clearLetterStates = () => {
        setGuessedLetters([]);
        setWrongLetters([]);
    }

    useEffect(() => {
        if (guesses <= 0) {

            //reset all states
            clearLetterStates();

            setGameStage(stages[2].name);
        }
    }, [guesses])

    // restarts the game
    const retry = () => {
        setScore(0);
        setGuesses(3);
        setGameStage(stages[0].name);
    }

    return (
        <div className="App">
            {gameStage === 'start' && <StartScreen startGame={startGame} />}
            {gameStage === 'game' && <Game 
                verifyLetter={verifyLetter} 
                pickedWord={pickedWord} 
                pickedCategory={pickedCategory} 
                letters={letters}
                guessedLetters={guessedLetters}
                wrongLetters={wrongLetters}
                guesses={guesses}
                score={score}
                />}
            {gameStage === 'end' && <GameOver retry={retry} />}            
        </div>
    );
}

export default App;
