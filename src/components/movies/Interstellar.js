import Footer from "../main_page/Footer";
import interstellar from '../../assets/img/interstellar/img1.jpg';
import MoviePage from "../MoviePage";

function Interstellar() {

	return (
		<>
			<MoviePage
				name="Interstellar"
				image={interstellar}
				description='"Interstellar był jednym z najbardziej wyczekiwanych premier 2014 roku.
                        Obsada filmu, miała być gwarantem sukcesu, jeszcze zanim mieliśmy szansę
                        zobaczyć kosmos na wielkim ekranie.Reżyserem "Interstellar" jest Christopher Nolan,
                        jeden z najbardziej cenionych współczesnych twórców, a w główne role wcielili się
                        Matthew McConaughey, który po występach w "Detektywie" i "Witaj w Klubie" święci
                        zasłużone triumfy, Jessica Chastain, znana z "Służących" czy "Długu" oraz Anne Hathaway,
                        jedna z najbardziej utalentowanych wciąż młodych, ale nie niedoświadczonych aktorek.
                        Te nazwiska mnie kupiły.Ale czy słusznie?' />
			<Footer />
		</>
	);

}

export default Interstellar;