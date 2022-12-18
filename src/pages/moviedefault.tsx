import { Outlet } from "react-router-dom";
import Layout from "../components/app/Layout";

const MovieDefault = () => {
	return (
		<Layout>
			<Outlet />
		</Layout>
	);
};

export default MovieDefault;
