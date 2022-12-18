import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const MovieCollection = () => {
	const movieTitles: Array<string> = [
		"Top Gun: Maverick",
		"Black Panther: Wakanda Forever",
		"Doctor Strange in the Multiverse of Madness",
		"Jurassic World Dominion",
		"Minions: The Rise of Gru",
		"The Batman",
		"Thor: Love and Thunder",
		"Sonic the Hedgehog 2",
		"Black Adam",
		"Elvis",
	];

	let movies: Array<any> = [];

	const [movie, setMovie] = useState<any>();
	const [movie1, setMovie1] = useState<any>();
	const [movie2, setMovie2] = useState<any>();
	const [movie3, setMovie3] = useState<any>();
	const [movie4, setMovie4] = useState<any>();
	const [movie5, setMovie5] = useState<any>();
	const [movie6, setMovie6] = useState<any>();
	const [movie7, setMovie7] = useState<any>();
	const [movie8, setMovie8] = useState<any>();

	const getMovies = async () => {
		movieTitles.forEach(async (title) => {
			const data = await axios.get(
				`http://www.omdbapi.com/?t=${title}&apikey=5ba563e2&r=json`
			);

			movies.push(data);
		});

		const data = await axios.get(
			`http://www.omdbapi.com/?t=${movieTitles[0]}&apikey=5ba563e2&r=json`
		);
		const data1 = await axios.get(
			`http://www.omdbapi.com/?t=${movieTitles[1]}&apikey=5ba563e2&r=json`
		);
		const data2 = await axios.get(
			`http://www.omdbapi.com/?t=${movieTitles[2]}&apikey=5ba563e2&r=json`
		);
		const data3 = await axios.get(
			`http://www.omdbapi.com/?t=${movieTitles[3]}&apikey=5ba563e2&r=json`
		);
		const data4 = await axios.get(
			`http://www.omdbapi.com/?t=${movieTitles[4]}&apikey=5ba563e2&r=json`
		);
		const data5 = await axios.get(
			`http://www.omdbapi.com/?t=${movieTitles[5]}&apikey=5ba563e2&r=json`
		);
		const data6 = await axios.get(
			`http://www.omdbapi.com/?t=${movieTitles[6]}&apikey=5ba563e2&r=json`
		);
		const data7 = await axios.get(
			`http://www.omdbapi.com/?t=${movieTitles[7]}&apikey=5ba563e2&r=json`
		);
		const data8 = await axios.get(
			`http://www.omdbapi.com/?t=${movieTitles[8]}&apikey=5ba563e2&r=json`
		);

		setMovie(data);
		setMovie1(data1);
		setMovie2(data2);
		setMovie3(data3);
		setMovie4(data4);
		setMovie5(data5);
		setMovie6(data6);
		setMovie7(data7);
		setMovie8(data8);
	};

	useEffect(() => {
		getMovies();
	});

	return (
		<Container>
			{movie && movie.data && movie.data.Type}
			{movie && movie.data ? (
				<Row>
					<MovieCard>
						{movie && movie.data && movie.data.Title}
					</MovieCard>
					<MovieCard>
						{movie1 && movie1.data && movie1.data.Title}
					</MovieCard>
					<MovieCard>
						{movie2 && movie2.data && movie2.data.Title}
					</MovieCard>
					<MovieCard>
						{movie3 && movie3.data && movie3.data.Title}
					</MovieCard>
					<MovieCard>
						{movie4 && movie4.data && movie4.data.Title}
					</MovieCard>
					<MovieCard>
						{movie5 && movie5.data && movie5.data.Title}
					</MovieCard>
					<MovieCard>
						{movie6 && movie6.data && movie6.data.Title}
					</MovieCard>
					<MovieCard>
						{movie7 && movie7.data && movie7.data.Title}
					</MovieCard>
					<MovieCard>
						{movie8 && movie8.data && movie8.data.Title}
					</MovieCard>
				</Row>
			) : (
				<Loader>Loading...</Loader>
			)}
		</Container>
	);
};

const Container = styled.div`
	margin: 0 56px;

	font-weight: 400;
	font-size: 24px;
	line-height: 31px;
	text-transform: capitalize;
`;

const Row = styled.div`
	display: flexbox;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	flex-wrap: nowrap;
	gap: 10px;
	margin-top: 18px;
	overflow-x: auto;
	scroll-behavior: smooth;
`;

const MovieCard = styled.div`
	color: #ffffff;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;

	width: 250px;
	height: 250px;

	background: #000000;
	border-radius: 12px;
`;

const Loader = styled.div`
	margin-bottom: 50vh;
`;

export default MovieCollection;
