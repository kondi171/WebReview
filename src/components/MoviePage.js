import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const API_PATH = 'http://localhost/webreview/src/php/addReview.php';
class MoviePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movie: this.props.name,
			username: '',
			stars: '',
			review: '',
			dataSent: '',
			data: [],
			error: '',
			start: false,
		}
	}
	componentDidMount() {
		this.section = document.getElementById('reviews');
		this.counter = 0;
		this.sumOfStars = 0;
		this.numberOfRecents = 0;
		this.handleOnSubmit = this.handleOnSubmit.bind(this);
		axios.get('http://localhost/webreview/src/php/showReview.php').then(response => {
			this.setState({ data: response.data });
		});
		this.jumbotron = document.getElementsByClassName('jumbotron-fluid');
		this.countStars = document.getElementsByClassName('count-stars');
		this.startInterval = setInterval(() => {
			this.setState({
				start: true,
			});
		}, 100);
	}
	componentDidUpdate() {
		this.numberOfRecents = this.jumbotron.length;
		if (this.state.start) clearInterval(this.startInterval);
		if (!this.state.start) {
			for (let i = 0; i < this.countStars.length; i++) {
				this.sumOfStars += parseInt(this.countStars[i].textContent.length - 1);
			}
		}
	}

	handleOnSubmit(event) {
		if ((this.state.username.length >= 3 && this.state.username.length <= 20) && (this.state.review.length >= 5 && this.state.review.length <= 250) && (this.state.stars > 0)) {
			event.preventDefault();
			axios({
				method: 'post',
				url: API_PATH,
				headers: {
					'content-type': 'application/json'
				},
				data: this.state
			})
				.then(result => {
					this.setState({
						dataSent: result.data.sent,
					})
				})
				.catch(error => this.setState({
					error: error.message
				}));
			this.setState({
				username: '',
				stars: '',
				review: "",
			});

		} else {
			this.setState({ error: true });
		}
	}
	handleHideBtnSuccess = () => {
		this.setState({ dataSent: false });
		window.location.reload(true);
	}
	handleHideBtnFailure = () => {
		this.setState({ error: false });
	}

	render() {
		return (
			<>
				<header className="cut-header">
					<h1>{this.props.name}</h1>
				</header>
				<main className="movie">
					<img src={this.props.image} alt={this.props.name} />
					<div className="review">
						<h2>Nasza Opinia</h2>
						<p>{this.props.description}</p>
						<h2 id='generalRate'>Ogólna ocena: {(this.sumOfStars / this.numberOfRecents).toFixed(2)}</h2>
						<div className="add-review">
							<div className="feedback-box">
								{this.state.dataSent ?
									<span className="msg-success">
										<h2 className="success">Sukces!</h2>
										<h3 className="success">Twoja recenzja została zamieszczona</h3>
										<h4 className="success">Doceniamy twój czas i zaangażowanie :)</h4>
										<button onClick={this.handleHideBtnSuccess}>OK</button>
									</span> : <span></span>}
								{this.state.error ?
									<span className="msg-failure">
										<h2 className="fail">Coś poszło nie tak...</h2>
										<h3 className="fail">Twoja recenzja nie została zamieszczona</h3>
										<h4 className="fail">Nazwa użytkownika musi mieścić się w przedziale od 3 do 20 znaków</h4>
										<h4 className="fail">Recenzja musi mieścić się w przedziale od 5 do 250 znaków</h4>
										<h4 className="fail">Pamiętaj o zaznaczeniu oceny!</h4>
										<button onClick={this.handleHideBtnFailure}>OK</button>
									</span> : <span></span>}
							</div>
							<h4>Dodaj coś od siebie!</h4>
							<form id="frm">
								<div className="form-group">
									<label htmlFor="name">Nazwa Użytkownika</label>
									<input onChange={e => this.setState({ username: e.target.value })} type="text" className="form-control" id="name" value={this.state.username} placeholder="Wpisz nazwę użytkownika" />
								</div>
								<label htmlFor="rate">Wystaw Ocene</label>
								<div className="stars">
									<input onClick={() => this.setState({ stars: 5 })} type="radio" id="star5" name="star" value="5" />
									<label htmlFor="star5"> Five Stars </label>
									<input onClick={() => this.setState({ stars: 4 })} type="radio" id="star4" name="star" value="4" />
									<label htmlFor="star4"> Four Stars </label>
									<input onClick={() => this.setState({ stars: 3 })} type="radio" id="star3" name="star" value="3" />
									<label htmlFor="star3"> Three Stars </label>
									<input onClick={() => this.setState({ stars: 2 })} type="radio" id="star2" name="star" value="2" />
									<label htmlFor="star2"> Two Stars </label>
									<input onClick={() => this.setState({ stars: 1 })} type="radio" id="star1" name="star" value="1" />
									<label htmlFor="star1"> One Star </label>
								</div>
								<div className="form-group">
									<label htmlFor="review">Napisz recenzję</label>
									<textarea onChange={e => this.setState({ review: e.target.value })} value={this.state.review} className="form-control" id="review" rows="3"></textarea>
								</div>
								<button onClick={e => this.handleOnSubmit(e)} id="btn" type="button" className="btn btn-primary">Wyślij</button>
							</form>
						</div>
						<h2>Recenzje użytkowników</h2>
						<div id="reviews" className="reviews">
							<div className="jumbotron-container">
								{this.state.data.map((result) => {
									if (result.movie === this.props.name) {
										return (
											<div key={result.id} className="jumbotron jumbotron-fluid">
												<div className="container">
													<h1 id="title" className="display-4">
														{result.username}
														{parseInt(result.stars) === 5 ? <span><span className="count-stars"> ★★★★★</span></span> : <span></span>}
														{parseInt(result.stars) === 4 ? <span><span className="count-stars"> ★★★★</span><span>★</span></span> : <span></span>}
														{parseInt(result.stars) === 3 ? <span><span className="count-stars"> ★★★</span><span>★★</span></span> : <span></span>}
														{parseInt(result.stars) === 2 ? <span><span className="count-stars"> ★★</span><span>★★★</span></span> : <span></span>}
														{parseInt(result.stars) === 1 ? <span><span className="count-stars"> ★</span><span>★★★★</span></span> : <span></span>}
													</h1>
													<p className="lead">{result.review}</p>
												</div>
											</div>
										)
									} else return null;
								})}
							</div>
						</div>
						<div className="links">
							<Link title="Powrót do strony głównej" to="/"><i className='fa fa-home'></i></Link>
							<Link title="Pomoc" to="/help"><i className="fa fa-info-circle"></i></Link>
						</div>
						<div style={{ clear: "both" }}></div>
					</div>
				</main>
			</>
		);
	}
}

export default MoviePage;