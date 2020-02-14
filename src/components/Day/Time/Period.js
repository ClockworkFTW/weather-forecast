import React from "react";
import styled from "styled-components";
import moment from "moment";

import { Icon } from "../../common";

const Day = ({ data, activePeriod, setPeriod, index }) => {
	const time = index === 0 ? "NOW" : moment.unix(data.time).format("HH:mm");
	const icon = `wi wi-${data.icon}`;
	const temp = Math.round(data.temperature);
	return (
		<Container
			active={activePeriod === index}
			onClick={() => setPeriod(index)}
		>
			<h3>{time}</h3>
			<Icon className={icon} margin="1rem 0" fontSize="1.125rem" />
			<h3>{temp}&deg;</h3>
		</Container>
	);
};

const Container = styled.div`
	display: inline-block;
	margin: 10px 0px;
	padding: 14px;
	border-radius: 4px;
	text-align: center;
	font-size: 0.875rem;
	color: #2d3748;
	opacity: ${props => (props.active ? "1" : "0.5")};
	background: ${props => (props.active ? "#ffffff" : "none")};
	box-shadow: ${props =>
		props.active
			? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);"
			: "none"};
	&:hover {
		opacity: 1;
		background: #ffffff;
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
			0 2px 4px -1px rgba(0, 0, 0, 0.06);
	}
`;

export default Day;
