import styled from "styled-components";

const Jumbotron = () => {
	return (
		<Container>
			<h3>Watch something incredible.</h3>
		</Container>
	);
};

const Container = styled.div`
	background-image: url("/images/jumbotron.png");
	background-size: cover;
	height: 84vh;
	padding: 12px;
	padding-left: 56px;

	h3 {
		width: 400px;
		height: 282px;

		font-family: "DM Sans";
		font-style: normal;
		font-weight: 700;
		font-size: 72px;
		line-height: 94px;
		letter-spacing: -0.05em;
		color: #ffffff;

		@media (max-width: 500px) {
			width: 100%;
			height: 100%;
			font-size: 4em;
		}

		@media (max-width: 365px) {
			font-size: 3em;
		}
	}

	@media (max-width: 800px) {
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding-left: 0;
		padding-right: 0;
	}

	@media (max-width: 500px) {
		padding-top: 25%;
	}
`;

export default Jumbotron;
