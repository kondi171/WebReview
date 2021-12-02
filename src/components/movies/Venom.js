import Footer from "../main_page/Footer";
import venom from '../../assets/img/venom/img1.jpg';
import MoviePage from "../MoviePage";

const Venom = () => {
	return (
		<>
			<MoviePage
				name="Venom"
				image={venom}
				description='Na pierwszy rzut oka "Venom" wygląda jak współczesne "jakościowe" kino komiksowe.
                    Obsada to pierwsza liga z Tomem Hardym na czele. Stojący za kamerą Ruben Fleischer
                    ma na koncie geekowski "Zombieland", a w wywiadach deklarował szacunek dla pierwowzoru,
                    podpierając się tytułami komiksów o Venomie. W obowiązkowym epizodziku pojawia się Stan Lee,
                    a na końcu mamy nawet scenę po napisach. Pozornie wszystko gra, mimo to "Venom" sprawia
                    wrażenie, jakby przybył do nas z przeszłości. Z czasów, gdy nikt nie myślał o żadnych
                    kinowych uniwersach, zeszytowy pierwowzór traktowano protekcjonalnie bądź pretekstowo,
                    a na ekranie starano się jakoś zatuszować obciachowość komiksowego rodowodu.' />
			<Footer />
		</>
	);
}

export default Venom;
