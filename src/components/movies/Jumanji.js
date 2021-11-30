import Footer from "../main_page/Footer";
import jumanji from '../../assets/img/jumanji/img1.jpg';
import MoviePage from "../MoviePage";

function Jumanji() {

	return (
		<>
			<MoviePage
				name="Jumanji"
				image={jumanji}
				description='Zakurzona konsola przenosi do magicznego świata czwórkę nastolatków – dwóch chłopaków
                    i dwie dziewczyny. W podzielonym na wrogie plemiona, silnie zhierarchizowanym świecie
                    amerykańskiego liceum każde z nich reprezentuje inną pozycję: niezdarnego nerda,
                    cichej outsiderki, szkolnej gwiazdki, czy popularnego futbolisty. W świecie gry
                    tę hierarchię radykalnie burzą przyznane bohaterom awatary. Gwiazda futbolu
                    zmienia się w fizycznie niepozorną postać komiczną, nerd w atletycznego lidera,
                    cicha dziewczyna w seksowną zabójczynię, a popularna szkolna piękność w korpulentnego,
                    łysiejącego naukowca.' />
			<Footer />
		</>
	);

}
export default Jumanji;

