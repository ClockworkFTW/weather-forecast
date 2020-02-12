import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Current from "./Current";
import Chart from "./Chart";
import Time from "./Time";

const Day = ({ data, activePeriod }) =>
	data && (
		<Container>
			<Current data={data} activePeriod={activePeriod} />
			<Chart width="100%" height={200} data={data} />
			<Time data={data} />
		</Container>
	);

const Container = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const mapStateToProps = state => ({
	data: state.forecast.data,
	activePeriod: state.period
});

export default connect(mapStateToProps)(Day);
