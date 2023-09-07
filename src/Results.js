import { useLocation, Link } from "react-router-dom";

const Results = () => {
    const location = useLocation();
    const { pieceGroup } = location.state

    const top50 = []
    for (let i = 9; i >= 0; i--) {
        for (let j = 0; j < pieceGroup[i].length; j++) {
            if (top50.length >= 50) {
                break
            }
            top50.push(pieceGroup[i][j])
        }
        if (top50.length >= 50) {
            break
        }
    }

    return (
        <div className="results">
            <h2 id="results-title">Results</h2>
            <div className="results-container">
                <ol className="results-list">
                    {top50.map((piece) => (
                        <li key={piece.id}>{piece.composer + ' - ' + piece.title}</li>
                    ))}
                </ol>
            </div>
            <Link className="button" to="/">Back to Start</Link>
        </div>
        
    );
}
 
export default Results;