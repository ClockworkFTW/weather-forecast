import React, { useState } from "react";

import darkskyServices from "../../services/darksky";

const Search = ({ location, setData }) => {
	const [term, setTerm] = useState(location);

	const handleSearch = async () => {
		const data = await darkskyServices.getForecast("14.5995,120.9842");
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
