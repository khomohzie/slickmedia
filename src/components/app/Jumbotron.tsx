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
	}
`;

export default Jumbotron;
