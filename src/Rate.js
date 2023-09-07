import { useState } from "react";
import RatingTable from "./RatingTable"
import useFetch from "./useFetch"
import { useLocation, useNavigate } from "react-router-dom";

const Rate = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { solo, concerto } = location.state
    const { data: pieces, setData: isLoading, error } = useFetch('http://localhost:8000/pieces', solo, concerto)
    const [ ratings, setRatings ] = useState({})
    const [ firstPieceIndex, setFirstPieceIndex ] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (firstPieceIndex + 10 >= pieces.length) {
            navigate('/rank', {state: {ratings, pieces}})
        }
        setFirstPieceIndex(firstPieceIndex+10)
    }

    return (
        <div className="rate">
            <p className="instruction">Rate the following pieces (10: best, 1: worst, ?: Unfamiliar with the work)</p>
            {error && <div>{ error }</div>}
            {isLoading && <div>Loading...</div>}
            <form className="rate-form" onSubmit={handleSubmit}>
                {pieces && <RatingTable pieces={pieces.slice(firstPieceIndex, Math.min(firstPieceIndex+10, pieces.length))} ratings={ratings} setRatings={setRatings}/>}
                <button className="button" type="submit">Next</button>
            </form>
        </div>
    );
}
 
export default Rate;