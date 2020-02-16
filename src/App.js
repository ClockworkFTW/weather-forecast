import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { fetchForecast } from "./reducers/forecast";

import { GlobalStyle } from "./components/common";
import Header from "./components/Header";
import Main from "./components/Main";

const App = ({ fetchForecast }) => {
	const [headerHeight, setHeaderHeight] = useState(null);

	useEffect(() => {
		fetchForecast();
	}, []);

	return (
		<Router>
			<GlobalStyle />
			<Header setHeaderHeight={setHeaderHeight} />
			<Main headerHeight={headerHeight} />
		</Router>
	);
};

export default connect(null, { fetchForecast })(App);
