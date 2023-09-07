const RatingTable = ({ pieces, ratings, setRatings }) => {

    return (
        <div className="rating-table-div">
            <table className="rating-table">
                <thead>
                    <tr>
                        <th>Piece</th>
                        <th>10</th>
                        <th>9</th>
                        <th>8</th>
                        <th>7</th>
                        <th>6</th>
                        <th>5</th>
                        <th>4</th>
                        <th>3</th>
                        <th>2</th>
                        <th>1</th>
                        <th>?</th>
                    </tr>
                </thead>
                <tbody>
                    {pieces.map((piece) => (
                        <tr className="table-row" key={piece.id}>
                            <td>{piece.composer + ' - ' + piece.title}</td>
                            <td><input className="radio-button" type="radio" value="10" name={piece.id} required onChange={(e) => setRatings({...ratings, [piece.id]: e.target.value})}/></td>
                            <td><input className="radio-button" type="radio" value="9" name={piece.id} required onChange={(e) => setRatings({...ratings, [piece.id]: e.target.value})}/></td>
                            <td><input className="radio-button" type="radio" value="8" name={piece.id} required onChange={(e) => setRatings({...ratings, [piece.id]: e.target.value})}/></td>
                            <td><input className="radio-button" type="radio" value="7" name={piece.id} required onChange={(e) => setRatings({...ratings, [piece.id]: e.target.value})}/></td>
                            <td><input className="radio-button" type="radio" value="6" name={piece.id} required onChange={(e) => setRatings({...ratings, [piece.id]: e.target.value})}/></td>
                            <td><input className="radio-button" type="radio" value="5" name={piece.id} required onChange={(e) => setRatings({...ratings, [piece.id]: e.target.value})}/></td>
                            <td><input className="radio-button" type="radio" value="4" name={piece.id} required onChange={(e) => setRatings({...ratings, [piece.id]: e.target.value})}/></td>
                            <td><input className="radio-button" type="radio" value="3" name={piece.id} required onChange={(e) => setRatings({...ratings, [piece.id]: e.target.value})}/></td>
                            <td><input className="radio-button" type="radio" value="2" name={piece.id} required onChange={(e) => setRatings({...ratings, [piece.id]: e.target.value})}/></td>
                            <td><input className="radio-button" type="radio" value="1" name={piece.id} required onChange={(e) => setRatings({...ratings, [piece.id]: e.target.value})}/></td>
                            <td><input className="radio-button" type="radio" value="?" name={piece.id} required onChange={(e) => setRatings({...ratings, [piece.id]: e.target.value})}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
 
export default RatingTable;