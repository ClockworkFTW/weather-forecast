import React, { useState, useEffect } from "react";

import { fetchLocalData } from "./util";
import { localStorageName } from "./config";

import { GlobalStyle } from "./components/common";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";

const App = () => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const cachedData = window.localStorage.getItem(localStorageName);
			// If cached data exists, set state
			if (cachedData) {
				setData(JSON.parse(cachedData));
			}
			// Else fetch from API
			else {
				const fetchedData = await fetchLocalData();
				window.localStorage.setItem(
					localStorageName,
					JSON.stringify(fetchedData)
				);
				setData(fetchedData);
			}
		};
		fetchData();
	}, []);

	return data ? (
		<>
			<GlobalStyle />
			<Header
				location={data.location}
				setData={setData}
				setError={setError}
			/>
			<Main data={data} error={error} />
		</>
	) : (
		<Loader />
	);
};

export default App;
