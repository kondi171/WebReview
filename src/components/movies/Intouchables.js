import Footer from "../main_page/Footer";
import intouchables from '../../assets/img/intouchables/img1.jpg';
import MoviePage from "../MoviePage";

const Intouchables = () => {
	return (
		<>
			<MoviePage
				name="Intouchables"
				image={intouchables}
				description='Film, jakich jeszcze nie było? No, może za dużo powiedziane, ale na pewno jedna
					z najlepszych komedii, jakie kiedykolwiek zostały zekranizowane. Dlaczego?
					Po pierwsze, bo przełamuje stereotypy. Pokazuje świat niepełnosprawnego człowieka,
					takim jakim jest. Bez przekłamań, ani udziwnień. Z minuty na minutę widzimy, że z chorobą
					nie można obchodzić się jak z jajkiem i trzeba stawiać jej czoła.'/>
			<Footer />
		</>
	);
}

export default Intouchables;