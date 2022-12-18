import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import { MovieDefault, MovieHome } from "./pages";
import NotFound from "./pages/NotFound";

function App() {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={<Navigate to="/movie/home" replace />}
				/>

				<Route path="/movie" element={<MovieHome />} />
				<Route path="*" element={<NotFound />} />

				<Route path="/movie" element={<MovieDefault />}>
					<Route path="home" element={<MovieHome />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
