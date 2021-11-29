import { Component } from "react";
import Footer from "../main_page/Footer";
import img1 from '../../assets/img/interstellar/img1.jpg';
import img2 from '../../assets/img/interstellar/img2.jpg';
import img3 from '../../assets/img/interstellar/img3.jpg';

class Interstellar extends Component {

	componentDidMount() {
		this.section = document.getElementById('reviews');
		this.counter = 0;
	}

	handleAddReview = () => {
		let numberOfJumbotron = 4;
		const rate = document.getElementById('generalRate');
		let checkedRadio = document.querySelector('.stars input:checked');
		const form = document.getElementById('frm');
		const name = document.getElementById('name').value;
		const review = document.getElementById('review').value;
		const jumbotron = document.createElement('div');
		const container = document.createElement('div');
		const h1 = document.createElement('h1');
		const p = document.createElement('p');
		jumbotron.classList.add('jumbotron');
		jumbotron.classList.add('jumbotron-fluid');
		jumbotron.appendChild(container);
		container.classList.add('container');
		container.appendChild(h1);
		h1.classList.add('display-4');
		this.counter++;
		if (checkedRadio.value == 1) h1.innerHTML = name + ' <span>★</span>★★★★</h1>';
		else if (checkedRadio.value == 2) h1.innerHTML = name + ' <span>★★</span>★★★</h1>';
		else if (checkedRadio.value == 3) h1.innerHTML = name + ' <span>★★★</span>★★</h1>';
		else if (checkedRadio.value == 4) h1.innerHTML = name + ' <span>★★★★</span>★</h1>';
		else if (checkedRadio.value == 5) h1.innerHTML = name + ' <span>★★★★★</span></h1>';
		p.classList.add('lead');
		p.textContent = review;
		container.appendChild(p);
		form.reset();
		if (this.counter == 1) jumbotron.style = 'float:right;';
		this.section.prepend(jumbotron);
		numberOfJumbotron++;
		let result = 4 + 5 + 5 + 3;
		let intValueOfRadio = parseInt(checkedRadio.value);
		result += intValueOfRadio;
		rate.textContent = "Ogólna ocena: " + result / numberOfJumbotron;
	}

	render() {
		return (
			<>
				<header className="cut-header">
					<h1>Interstellar</h1>
				</header>
				<main className="movie">
					<img src={img1} alt="Interstellar" />
					<div class="review">
						<h2>Nasza Opinia</h2>
						<p>
							"Interstellar" był jednym z najbardziej wyczekiwanych premier 2014 roku.
							Obsada filmu, miała być gwarantem sukcesu, jeszcze zanim mieliśmy szansę
							zobaczyć kosmos na wielkim ekranie.Reżyserem "Interstellar" jest Christopher Nolan,
							jeden z najbardziej cenionych współczesnych twórców, a w główne role wcielili się
							Matthew McConaughey, który po występach w "Detektywie" i "Witaj w Klubie" święci
							zasłużone triumfy, Jessica Chastain, znana z "Służących" czy "Długu" oraz Anne Hathaway,
							jedna z najbardziej utalentowanych wciąż młodych, ale nie niedoświadczonych aktorek.
							Te nazwiska mnie kupiły.Ale czy słusznie?
						</p>
						<h2 id='generalRate'>Ogólna ocena: 4.25</h2>
						<div class="add-review">
							<h4>Dodaj coś od siebie!</h4>
							<form id="frm">
								<div class="form-group">
									<label for="name">Nazwa Użytkownika</label>
									<input type="text" class="form-control" id="name" placeholder="Wpisz nazwę użytkownika" />
								</div>
								<label for="rate">Wystaw Ocene</label>
								<div class="stars">
									<input type="radio" id="star5" name="star" value="5" />
									<label for="star5"> Five Stars </label>
									<input type="radio" id="star4" name="star" value="4" />
									<label for="star4"> Four Stars </label>
									<input type="radio" id="star3" name="star" value="3" />
									<label for="star3"> Three Stars </label>
									<input type="radio" id="star2" name="star" value="2" />
									<label for="star2"> Two Stars </label>
									<input type="radio" id="star1" name="star" value="1" />
									<label for="star1"> One Star </label>
								</div>
								<div class="form-group">
									<label for="review">Napisz recenzję</label>
									<textarea class="form-control" id="review" rows="3"></textarea>
								</div>
								<button onClick={this.handleAddReview} id="btn" type="button" class="btn btn-primary">Wyślij</button>
							</form>
						</div>
						<h2>Recenzje użytkowników</h2>
						<div id="reviews" class="reviews">
							<div class="jumbotron-container">
								<div class="jumbotron jumbotron-fluid">
									<div class="container">
										<h1 class="display-4">Maciek <span>★★★★</span>★</h1>
										<p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores fugiat libero quibusdam
											eligendi sit ullam commodi dolores culpa veritatis similique, id aliquam alias iure incidunt nemo
											perspiciatis facere. Harum, animi!This is a modified jumbotron that occupies the entire horizontal space
											of its parent.</p>
									</div>
								</div>
								<div class="jumbotron jumbotron-fluid">
									<div class="container">
										<h1 class="display-4">Wojtek <span>★★★★★</span></h1>
										<p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores fugiat libero quibusdam
											eligendi sit ullam commodi dolores culpa veritatis similique, id aliquam alias iure incidunt nemo
											perspiciatis facere. Harum, animi!This is a modified jumbotron that occupies the entire horizontal space
											of its parent.</p>
									</div>
								</div>
								<div class="jumbotron jumbotron-fluid">
									<div class="container">
										<h1 class="display-4">Marysia <span>★★★★★</span></h1>
										<p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores fugiat libero quibusdam
											eligendi sit ullam commodi dolores culpa veritatis similique, id aliquam alias iure incidunt nemo
											perspiciatis facere. Harum, animi!This is a modified jumbotron that occupies the entire horizontal space
											of its parent.</p>
									</div>
								</div>
								<div class="jumbotron jumbotron-fluid">
									<div class="container">
										<h1 class="display-4">Ania <span>★★★</span>★★</h1>
										<p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores fugiat libero quibusdam
											eligendi sit ullam commodi dolores culpa veritatis similique, id aliquam alias iure incidunt nemo
											perspiciatis facere. Harum, animi!This is a modified jumbotron that occupies the entire horizontal space
											of its parent.</p>
									</div>
								</div>
							</div>
						</div>
						<div style={{ clear: "both" }}></div>
					</div>
				</main>
				<Footer />
			</>
		);
	}
}

export default Interstellar;