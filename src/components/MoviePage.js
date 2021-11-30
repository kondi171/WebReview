import React from 'react';

class MoviePage extends React.Component {
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
        if (checkedRadio.value === 1) h1.innerHTML = name + ' <span>★</span>★★★★</h1>';
        else if (checkedRadio.value === 2) h1.innerHTML = name + ' <span>★★</span>★★★</h1>';
        else if (checkedRadio.value === 3) h1.innerHTML = name + ' <span>★★★</span>★★</h1>';
        else if (checkedRadio.value === 4) h1.innerHTML = name + ' <span>★★★★</span>★</h1>';
        else if (checkedRadio.value === 5) h1.innerHTML = name + ' <span>★★★★★</span></h1>';
        p.classList.add('lead');
        p.textContent = review;
        container.appendChild(p);
        form.reset();
        if (this.counter === 1) jumbotron.style = 'float:right;';
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
                    <h1>{this.props.name}</h1>
                </header>
                <main className="movie">
                    <img src={this.props.image} alt={this.props.name} />
                    <div className="review">
                        <h2>Nasza Opinia</h2>
                        <p>{this.props.description}</p>
                        <h2 id='generalRate'>Ogólna ocena: 4.25</h2>
                        <div className="add-review">
                            <h4>Dodaj coś od siebie!</h4>
                            <form id="frm">
                                <div className="form-group">
                                    <label htmlFor="name">Nazwa Użytkownika</label>
                                    <input type="text" className="form-control" id="name" placeholder="Wpisz nazwę użytkownika" />
                                </div>
                                <label htmlFor="rate">Wystaw Ocene</label>
                                <div className="stars">
                                    <input type="radio" id="star5" name="star" value="5" />
                                    <label htmlFor="star5"> Five Stars </label>
                                    <input type="radio" id="star4" name="star" value="4" />
                                    <label htmlFor="star4"> Four Stars </label>
                                    <input type="radio" id="star3" name="star" value="3" />
                                    <label htmlFor="star3"> Three Stars </label>
                                    <input type="radio" id="star2" name="star" value="2" />
                                    <label htmlFor="star2"> Two Stars </label>
                                    <input type="radio" id="star1" name="star" value="1" />
                                    <label htmlFor="star1"> One Star </label>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="review">Napisz recenzję</label>
                                    <textarea className="form-control" id="review" rows="3"></textarea>
                                </div>
                                <button onClick={this.handleAddReview} id="btn" type="button" className="btn btn-primary">Wyślij</button>
                            </form>
                        </div>
                        <h2>Recenzje użytkowników</h2>
                        <div id="reviews" className="reviews">
                            <div className="jumbotron-container">
                                <div className="jumbotron jumbotron-fluid">
                                    <div className="container">
                                        <h1 className="display-4">Maciek <span>★★★★</span>★</h1>
                                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores fugiat libero quibusdam
                                            eligendi sit ullam commodi dolores culpa veritatis similique, id aliquam alias iure incidunt nemo
                                            perspiciatis facere. Harum, animi!This is a modified jumbotron that occupies the entire horizontal space
                                            of its parent.</p>
                                    </div>
                                </div>
                                <div className="jumbotron jumbotron-fluid">
                                    <div className="container">
                                        <h1 className="display-4">Wojtek <span>★★★★★</span></h1>
                                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores fugiat libero quibusdam
                                            eligendi sit ullam commodi dolores culpa veritatis similique, id aliquam alias iure incidunt nemo
                                            perspiciatis facere. Harum, animi!This is a modified jumbotron that occupies the entire horizontal space
                                            of its parent.</p>
                                    </div>
                                </div>
                                <div className="jumbotron jumbotron-fluid">
                                    <div className="container">
                                        <h1 className="display-4">Marysia <span>★★★★★</span></h1>
                                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores fugiat libero quibusdam
                                            eligendi sit ullam commodi dolores culpa veritatis similique, id aliquam alias iure incidunt nemo
                                            perspiciatis facere. Harum, animi!This is a modified jumbotron that occupies the entire horizontal space
                                            of its parent.</p>
                                    </div>
                                </div>
                                <div className="jumbotron jumbotron-fluid">
                                    <div className="container">
                                        <h1 className="display-4">Ania <span>★★★</span>★★</h1>
                                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores fugiat libero quibusdam
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
            </>
        );
    }
}

export default MoviePage;