import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import { initForecast, fetchForecast } from "./reducers/forecast";

import { GlobalStyle } from "./components/common";
import Render from "./components/common/Render";
import Header from "./components/Header";
import Day from "./components/Day";
import Week from "./components/Week";

const App = ({ initForecast, fetchForecast }) => {
	const [headerHeight, setHeaderHeight] = useState(null);

	useEffect(() => {
		const cachedForecast = window.localStorage.getItem(
			"weather-forecast-data"
		);
		if (cachedForecast) {
			initForecast(JSON.parse(cachedForecast));
		} else {
			fetchForecast();
		}
	}, []);

	return (
		<Router>
			<GlobalStyle />
			<Header setHeaderHeight={setHeaderHeight} />
			<Main headerHeight={headerHeight}>
				<Switch>
					<Route path="/" exact>
						<Render>
							<h1>Home Page</h1>
						</Render>
					</Route>
					<Route path="/day">
						<Render>
							<Day />
						</Render>
					</Route>
					<Route path="/week">
						<Render>
							<Week />
						</Render>
					</Route>
				</Switch>
			</Main>
		</Router>
	);
};

const Main = styled.div`
	max-width: 600px;
	height: ${props => `calc(100vh - ${props.headerHeight}px)`};
	margin: 0 auto;
	padding: 30px 20px;
	background: #faf9fa;
	overflow: scroll;
`;

export default connect(null, { initForecast, fetchForecast })(App);
