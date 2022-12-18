import styled from "styled-components";
import TopBar from "./TopBar";

type LayoutProps = {
	children: React.ReactNode;
};

const Layout = (props: LayoutProps) => {
	return (
		<>
			<TopBar />

			<Children>{props.children}</Children>
		</>
	);
};

const Children = styled.main``;

export default Layout;
