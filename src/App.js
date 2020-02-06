import React, { useState } from "react";

import Search from "./components/Search";
import View from "./components/View";

const App = () => {
	const [data, setData] = useState(null);
	console.log(data);
	return (
		<div>
			<h1>Weather App</h1>
			<Search setData={setData} />
			<View data={data} />
		</div>
	);
};

export default App;
