import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";

import Render from "../common/Render";
import Day from "./Day";
import Week from "./Week";

const Main = ({ headerHeight }) => {
	const location = useLocation();

	return (
		<Container headerHeight={headerHeight}>
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.pathname}>
					<Route path="/weather-forecast/" exact>
						<Render>
							<h1>Home Page</h1>
						</Render>
					</Route>
					<Route path="/weather-forecast/day">
						<Render>
							<Day pathname={location.pathname} />
						</Render>
					</Route>
					<Route path="/weather-forecast/week">
						<Render>
							<Week pathname={location.pathname} />
						</Render>
					</Route>
				</Switch>
			</AnimatePresence>
		</Container>
	);
};

const Container = styled.div`
	max-width: 600px;
	height: ${props => `calc(100vh - ${props.headerHeight}px)`};
	margin: 0 auto;
	padding: 30px 20px;
	overflow-x: hidden;
	overflow-y: scroll;
`;

export default Main;
