import { useLocation, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

const Rank = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dragItem = useRef();
    const dragOverItem = useRef();
    const { ratings, pieces } = location.state;

    const [pieceGroup, setPieceGroup] = useState([
        pieces.filter((piece) => ratings[piece.id] === '1'),
        pieces.filter((piece) => ratings[piece.id] === '2'),
        pieces.filter((piece) => ratings[piece.id] === '3'),
        pieces.filter((piece) => ratings[piece.id] === '4'),
        pieces.filter((piece) => ratings[piece.id] === '5'),
        pieces.filter((piece) => ratings[piece.id] === '6'),
        pieces.filter((piece) => ratings[piece.id] === '7'),
        pieces.filter((piece) => ratings[piece.id] === '8'),
        pieces.filter((piece) => ratings[piece.id] === '9'),
        pieces.filter((piece) => ratings[piece.id] === '10'),
    ]);
    const [ numRanked, setNumRanked ] = useState(0)
    const [ stage, setStage ] = useState(9)

    const dragStart = (e, position) => {
        dragItem.current = position
        console.log(e.target.innerHTML);
    }

    const dragEnter = (e, position) => {
        dragOverItem.current = position;
        console.log(e.target.innerHTML);
    };

    const drop = (e) => {
        const copyListItems = [...pieceGroup[stage]];
        const dragItemContent = copyListItems[dragItem.current];
        copyListItems.splice(dragItem.current, 1);
        copyListItems.splice(dragOverItem.current, 0, dragItemContent);
        dragItem.current = null;
        dragOverItem.current = null;
        setPieceGroup(pieceGroup.with(stage, copyListItems));
    };
    
    const handleNext = () => {
        setNumRanked(numRanked + pieceGroup[stage].length)
        for (let i = stage-1; i >= -1; i--) {
            if (numRanked >= 50 || i === -1) {
                navigate('/results', {state: {pieceGroup: pieceGroup}})
                break
            } else if (pieceGroup[i].length >= 2) {
                setStage(i)
                break
            }
            setNumRanked(numRanked + pieceGroup[i].length)
        }
    }
    
    let noRankingNecessary = false
    for (let i = 0; i < 10; i++) {
        if (pieceGroup[i].length >= 2) {
            break
        }
        if (i === 9) {
            noRankingNecessary = true
        }
    }
    if (noRankingNecessary) {
        return (
            <div className="rank">
                <p>Your results are ready</p>
                <button className="button" onClick={handleNext}>Next</button>
            </div>
        )
    } else if (stage === 9 && pieceGroup[stage].length < 2) {
        handleNext()
    }

    return (
        <div className="rank">
            <p className="instruction">Order the following pieces from favorite to least favorite (top to bottom) by dragging and dropping.</p>
            <div className="rank-pieces">
            {stage >= 0 && pieceGroup[stage].map((piece, index) => (
                <div className="rank-piece-container">
                    <span className="rank-piece" key={index} draggable onDragStart={(e) => dragStart(e, index)} onDragEnter={(e) => dragEnter(e, index)} onDragEnd={drop}>
                        {piece.composer + " - " + piece.title}
                    </span>
                </div>
            ))}
            </div>
            <button className="button" onClick={handleNext}>Next</button>
        </div>
    );
}
 
export default Rank;