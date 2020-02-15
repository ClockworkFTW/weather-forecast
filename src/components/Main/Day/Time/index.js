import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import moment from "moment";

import { setPeriod } from "../../../../reducers/period";
import Period from "./Period";

const Week = ({ data, activePeriod, setPeriod }) => {
	const today = [data.currently, ...data.hourly.data];
	today.length = 24;
	const headerDate = moment
		.unix(today[activePeriod].time)
		.format("dddd - DD MMM");

	return (
		<Wrapper>
			<h1>{headerDate}</h1>
			<Container>
				{today.map((period, index) => (
					<Period
						key={period.time}
						data={period}
						activePeriod={activePeriod}
						setPeriod={setPeriod}
						index={index}
					/>
				))}
			</Container>
		</Wrapper>
	);
};

const Wrapper = styled.div``;

const Container = styled.div`
	overflow-x: scroll;
	overflow-y: hidden;
	white-space: nowrap;
`;

const mapStateToProps = state => ({ activePeriod: state.period });

export default connect(mapStateToProps, { setPeriod })(Week);
