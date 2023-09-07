import { Link } from 'react-router-dom'

const Home = () => {
    return ( 
        <div className="home">
            <p className="instruction">Which works would you like to include in your ranking?</p>
            <div className="pieces-options">
                <Link to="/rate" className="button" state={{ solo: true, concerto: false }}>Solo works only</Link>
                <Link to="/rate" className="button" state={{ solo: false, concerto: true }}>Concerti only</Link>
                <Link to="/rate" className="button" state={{ solo: true, concerto: true }}>Both solo works and concerti</Link>
            </div>
        </div>
    );
}
 
export default Home;