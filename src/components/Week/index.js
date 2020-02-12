import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Day from "./Day";

const Week = ({ data }) => {
	const [activePeriod, setActivePeriod] = useState(0);
	return (
		data && (
			<Container>
				{data.daily.data.map((day, index) => (
					<Day
						key={day.time}
						day={day}
						index={index}
						activePeriod={activePeriod}
						setActivePeriod={setActivePeriod}
					/>
				))}
			</Container>
		)
	);
};

const Container = styled.div``;

const mapStateToProps = state => ({ data: state.forecast.data });

export default connect(mapStateToProps)(Week);
