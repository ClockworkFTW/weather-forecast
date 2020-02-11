import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { fetchForecast } from "../../reducers/forecast";

import Current from "./Current";
import Chart from "./Chart";
import Time from "./Time";
import Error from "./Error";
import Loader from "./Loader";

const Main = ({
	headerHeight,
	fetchForecast,
	pending,
	data,
	error,
	activePeriod
}) => {
	useEffect(() => {
		fetchForecast();
	}, []);
	return (
		<Wrapper headerHeight={headerHeight}>
			{data ? (
				<Container>
					<Current data={data} activePeriod={activePeriod} />
					<Chart width="100%" height={200} data={data.hourly.data} />
					<Time data={data} />
				</Container>
			) : (
				<Loader />
			)}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	height: ${props => `calc(100vh - ${props.headerHeight}px)`};
	padding: 30px 20px;
	background: #faf9fa;
	overflow: scroll;
`;

const Container = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const mapStateToProps = state => ({
	pending: state.forecast.pending,
	data: state.forecast.data,
	error: state.forecast.error,
	activePeriod: state.period
});

export default connect(mapStateToProps, { fetchForecast })(Main);
