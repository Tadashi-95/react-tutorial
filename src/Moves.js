// TODO : 途中の状態！ Moves 内で 親である Game の currentMove state を変更できるようにしないといけない。
// 「react 子コンポーネントでset」で検索

export default function Moves({history, setCurrentMove}) {
    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = 'Go to move #' + move;
        } else {
            description = 'Go to game start';
        }

        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });

    return (
        <ol>{moves}</ol>
    );
}