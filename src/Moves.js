export default function Moves({history, currentMove, setCurrentMove}) {
    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move === 0) {
            description = 'Go to game start';
        } else if (move === currentMove) {
            description = 'You are at move #' + move;
        } else {
            description = 'Go to move #' + move;
        }

        return (
            <li key={move} start="0">
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });

    return (
        <ul className="moves-history">{moves}</ul>
    );
}