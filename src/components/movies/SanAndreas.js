import Footer from "../main_page/Footer";
import sanandreas from '../../assets/img/san_andreas/img1.jpg';
import MoviePage from "../MoviePage";

const SanAndreas = () => {
	return (
		<>
			<MoviePage
				name="San Andreas"
				image={sanandreas}
				description='Ziemia pęka wzdłuż całego uskoku San Andreas – od zapory Hoovera w Nevadzie przez
                    Los Angeles aż po San Francisco.Kolejne wstrząsy zamieniają metropolie w wielkie
                    gruzowiska i rozdzielają bohaterów: pracującego w służbach ratowniczych Raya(Johnson),
                    jego córkę Blake(Alexandra Daddario) i już - wkrótce - byłą - żonę Emmę(Carla Gugino).
                    Ray wygląda, jakby sam mógł przenieść kilka płyt tektonicznych, więc szybko
                    zakasa rękawy i rusza na ratunek bliskim.W tym samym czasie, w ultranowoczesnym
                    centrum operacyjnym, sejsmolodzy do spółki z mediami wysyłają w eter cenny komunikat:
                    kiedy świat rozpada się na kawałki, trzeba schować się pod stołem.' />
			<Footer />
		</>
	);

}

export default SanAndreas;

