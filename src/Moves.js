import { useState } from "react" ;

const useToggle = () => {
    const [state, setState] = useState(false);
    const toggle =  () => setState(!state); 

    return [state, toggle];
}

function ToggleButton ({isAscending, toggleIsAscending}) {
    let sortOrderDescription;
    if (isAscending) {
        sortOrderDescription = "Ascending order";
    } else {
        sortOrderDescription = "Descending order";
    }

    return (
        <div>
          <button onClick={toggleIsAscending}>{sortOrderDescription}</button>
        </div>
    );
}

export default function Moves({history, currentMove, setCurrentMove}) {
    const [isAscending, toggleIsAscending] = useToggle();

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

    if (!isAscending) {
        moves.reverse();
    }

    return (
        <>
            <ToggleButton isAscending={isAscending} toggleIsAscending={toggleIsAscending} />
            <ul className="moves-history">{moves}</ul>
        </>
    );
}