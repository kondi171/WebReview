import { Link } from 'react-router-dom';

function MovieCard({ name, image, content }) {
    let routeName = '';
    routeName = routeName + '/movie/' + name.toLowerCase();

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={image} alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{content}</p>
                <Link to={routeName} className="btn btn-primary">Czytaj dalej...</Link>
            </div>
        </div>
    );
}

export default MovieCard;