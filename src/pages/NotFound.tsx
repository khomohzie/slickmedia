import styled from "styled-components";

const NotFound = () => {
	return (
		<Container>
			<h1>404</h1>

			<VertLine></VertLine>

			<h4>This page does not exist.</h4>
		</Container>
	);
};

export default NotFound;

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
`;

const VertLine = styled.div`
	width: 1px;
	height: 48px;
	margin: 1rem;
	background: #0000006f;
	box-sizing: border-box;
`;
