import React, { useState, useEffect } from "react";
import darkskyServices from "./services/darksky";

import geocode from "./services/geocode";

import { GlobalStyle } from "./components/common";
import Header from "./components/Header";
import Main from "./components/Main";
import Error from "./components/Error";
import Loader from "./components/Loader";

const App = () => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const success = async pos => {
			const coords = `${pos.coords.latitude},${pos.coords.longitude}`;
			const location = await geocode.getLocation(coords);
			const forecast = await darkskyServices.getForecast(coords);
			setData({ ...forecast, location });
		};

		const error = err => setError(error);

		navigator.geolocation.getCurrentPosition(success, error);
	}, []);

	return data ? (
		!error ? (
			<div>
				<GlobalStyle />
				<Header location={data.location} setData={setData} />
				<Main data={data} />
			</div>
		) : (
			<Error error={error} />
		)
	) : (
		<Loader />
	);
};

export default App;
