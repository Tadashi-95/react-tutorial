import { useState } from 'react'
import Board from "./Board";
import Moves from "./Moves";

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
        const nextHistoty = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistoty);
        setCurrentMove(nextHistoty.length - 1);
    }
    
    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
            </div>
            <div className="game-info">
                <Moves history={history} setCurrentMove={() => setCurrentMove()} />
            </div>
        </div>
    );
}