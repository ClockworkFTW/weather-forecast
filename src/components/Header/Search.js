import React, { useState } from "react";

import { fetchSearchData } from "../../util";

const Search = ({ location, setData, setError }) => {
	const [term, setTerm] = useState(location);

	const handleSearch = async () => {
		try {
			const data = await fetchSearchData(term);
			setTerm(data.location);
			setData(data);
		} catch (error) {
			setError(error);
		}
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
