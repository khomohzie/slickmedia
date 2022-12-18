import axios from "axios";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import { Input } from "../stylekit/common";

type Inputs = {
	name: string;
};

const SearchForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<Inputs>({ mode: "all" });

	const [searchedMovie, setSearchedMovie] = useState<any>();

	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		console.log(data);

		const movieData = await axios.get(
			`http://www.omdbapi.com/?t=${data.name}&apikey=5ba563e2&r=json`
		);

		setSearchedMovie(movieData);

		reset();
	};

	return (
		<Container>
			<Title>Search</Title>
			<form onSubmit={handleSubmit(onSubmit)}>
				<InputContainer>
					<Input
						type="text"
						placeholder="Press enter after typing search term."
						{...register("name")}
					/>
					{errors.name && (
						<span className="errors">{errors.name.message}</span>
					)}
				</InputContainer>
			</form>

			{searchedMovie && searchedMovie.data && (
				<>
					<h3>Search Result:</h3>
					<h3>{searchedMovie.data.Type}</h3>
					<MovieCard>{searchedMovie.data.Title}</MovieCard>
				</>
			)}
		</Container>
	);
};

const Container = styled.div`
	margin: 32px 56px;

	h3 {
		text-transform: capitalize;
	}
`;

const Title = styled.div`
	margin-bottom: 4px;
	font-weight: 400;
	font-size: 24px;
	line-height: 31px;
`;

const InputContainer = styled.div`
	margin-bottom: 24px;

	span {
		font-size: 12px;
		letter-spacing: 0.02rem;
		color: #3e4e54;
	}

	.errors {
		color: red;
		font-style: italic;
		font-size: 14px;
	}

	.requirements {
		padding: 16px 0 0;
		max-height: 200px;
		overflow: hidden;
		color: red;
		font-style: italic;
		font-size: 14px;
	}

	.input_error:not(:focus):not(:placeholder-shown) {
		background: pink;
	}
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

export default SearchForm;
