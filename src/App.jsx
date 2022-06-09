import "./App.css";
import { posters } from "./data/posters";

function App() {
	return (
		<div className="App">
			{posters.map(({ img, title }) => (
				<img key={title} src={img} alt="rick" />
			))}
		</div>
	);
}

export default App;
