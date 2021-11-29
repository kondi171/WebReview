import { Component } from "react";
import Footer from "../main_page/Footer";

class Interstellar extends Component {
	render() {
		return (
			<>
				<header className="cut-header">
					<h1>Interstellar</h1>
				</header>
				<main className="movie">
					<div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
						<div className="carousel-inner">
							<div className="carousel-item active">
								<img className="d-block w-100" src="img/interstellar/528444_1.1.jpg" alt="First slide" />
							</div>
							<div className="carousel-item">
								<img className="d-block w-100" src="img/interstellar/821a5dcf-27a5-4a9e-b8f0-0188485d0980_f1400x900.jpg"
									alt="Second slide" />
							</div>
							<div className="carousel-item">
								<img className="d-block w-100" src="img/interstellar/o-INTERSTELLAR-TRAILER-facebook.jpg" alt="Third slide" />
							</div>
						</div>
						<a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
							<span className="carousel-control-prev-icon" aria-hidden="true"></span>
							<span className="sr-only">Previous</span>
						</a>
						<a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
							<span className="carousel-control-next-icon" aria-hidden="true"></span>
							<span className="sr-only">Next</span>
						</a>
					</div>
				</main>
				<Footer />
			</>
		);
	}
}

export default Interstellar;