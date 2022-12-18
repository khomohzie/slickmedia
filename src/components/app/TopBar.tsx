import { Link } from "react-router-dom";
import styled from "styled-components";

const TopBar = () => {
	return (
		<Container>
			<Link to="/">
				<Brand>
					<Logo src="/sitelogo.png" alt="Site Logo" />
				</Brand>
			</Link>
		</Container>
	);
};

const Container = styled.div`
	background: #292929;
	border: none !important;

	@media (max-width: 800px) {
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
	}
`;

const Brand = styled.button`
	background: none;
	color: #ffffff;
	padding: 14px;
	margin: 24px 56px;
	border: 1px solid #ffffff;
	box-sizing: border-box;
`;

const Logo = styled.img`
	width: 120px;
	height: 24px;
`;

export default TopBar;
