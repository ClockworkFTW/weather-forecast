import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import { fetchForecast } from "./reducers/forecast";

import { GlobalStyle } from "./components/common";
import Renderer from "./components/common/Renderer";
import Header from "./components/Header";
import Day from "./components/Day";
import Week from "./components/Week";

const App = ({ fetchForecast }) => {
	const [headerHeight, setHeaderHeight] = useState(null);

	useEffect(() => {
		fetchForecast();
	}, []);

	return (
		<Router>
			<GlobalStyle />
			<Header setHeaderHeight={setHeaderHeight} />
			<Main headerHeight={headerHeight}>
				<Switch>
					<Route path="/" exact>
						<Renderer>
							<Day />
						</Renderer>
					</Route>
					<Route path="/week">
						<Renderer>
							<Week />
						</Renderer>
					</Route>
				</Switch>
			</Main>
		</Router>
	);
};

const Main = styled.div`
	height: ${props => `calc(100vh - ${props.headerHeight}px)`};
	padding: 30px 20px;
	background: #faf9fa;
	overflow: scroll;
`;

export default connect(null, { fetchForecast })(App);
