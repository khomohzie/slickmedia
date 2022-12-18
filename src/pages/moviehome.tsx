import Jumbotron from "../components/app/Jumbotron";
import MovieCollection from "../components/movies/MovieCollection";
import SearchForm from "../components/search/SearchForm";

const MovieHome = () => {
	return (
		<>
			<Jumbotron />
			<SearchForm />
			<MovieCollection />
		</>
	);
};

export default MovieHome;
