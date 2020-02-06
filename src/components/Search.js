import React, { useState } from "react";

import darkskyServices from "../services/darksky";

const Search = ({ setData }) => {
	const [term, setTerm] = useState("");

	const handleSearch = async () => {
		const data = await darkskyServices.getForecast("37.7749, 122.4194");
		setData(data);
	};

	return (
		<div>
			<input
				type="text"
				value={term}
				onChange={event => setTerm(event.target.value)}
			/>
			<button onClick={handleSearch}>search</button>
		</div>
	);
};

export default Search;
