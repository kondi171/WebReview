import MovieCard from './../MovieCard';
import Interstellar from '../../assets/img/posters/interstellar.jpg';
import Intouchables from '../../assets/img/posters/intouchables.jpg';
import Jumanji from '../../assets/img/posters/jumanji.jpg';
import SanAndreas from '../../assets/img/posters/san_andreas.jpg';
import Venom from '../../assets/img/posters/venom.jpg';
import { Link } from 'react-router-dom';
const MovieLibrary = () => {
    return (
        <main>
            <h2>Biblioteka filmów</h2>
            <div className="library">
                <MovieCard name="Interstellar" image={Interstellar} content="Some quick example text to build on the card title and make up the bulk of the card's content." />
                <MovieCard name="Intouchables" image={Intouchables} content="Some quick example text to build on the card title and make up the bulk of the card's content." />
                <MovieCard name="Jumanji" image={Jumanji} content="Some quick example text to build on the card title and make up the bulk of the card's content." />
                <MovieCard name="San Andreas" image={SanAndreas} content="Some quick example text to build on the card title and make up the bulk of the card's content." />
                <MovieCard name="Venom" image={Venom} content="Some quick example text to build on the card title and make up the bulk of the card's content." />
            </div>
            <div className="links">
                <Link title="Pomoc" to="/help"><i className="fa fa-info-circle"></i></Link>
            </div>
        </main>
    );
}

export default MovieLibrary;