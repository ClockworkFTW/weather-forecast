import React from "react";
import styled from "styled-components";
import moment from "moment";

import { TimeIcon } from "../../common";

const Day = ({ data, index }) => {
	const time = index === 0 ? "NOW" : moment.unix(data.time).format("HH:mm");
	const icon = `wi wi-${data.icon}`;
	const temp = Math.round(data.temperature);
	return (
		<Container>
			<h3>{time}</h3>
			<TimeIcon className={icon} />
			<h3>{temp}&deg;</h3>
		</Container>
	);
};

const Container = styled.div`
	display: inline-block;
	margin: 10px 0px;
	padding: 10px;
	border-radius: 4px;
	text-align: center;
	opacity: 0.5;
	font-size: 0.875rem;
	color: #2d3748;
	&:hover {
		opacity: 1;
		background: #ffffff;
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
			0 2px 4px -1px rgba(0, 0, 0, 0.06);
	}
`;

export default Day;
