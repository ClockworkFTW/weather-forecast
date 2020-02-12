import React from "react";
import styled from "styled-components";
import moment from "moment";

import { Icon } from "../common";
import Grid from "./Grid";

const Day = ({ day, index, activePeriod, setActivePeriod }) => {
	const timeDay = moment.unix(day.time).format("dddd");
	const timeDate = moment.unix(day.time).format("DD MMM - YYYY");

	const tempLow = Math.round(day.temperatureLow);
	const tempHigh = Math.round(day.temperatureHigh);

	const moonphase = day.moonPhase * 100;
	const cloudCover = day.cloudCover * 100;
	const windSpeed = Math.round(day.windSpeed);
	const humidity = Math.round(day.humidity * 100);
	const visibility = day.visibility * 100;
	const precipProb = day.precipProbability * 100;

	const sunrise = moment.unix(day.sunriseTime).format("h:mm");
	const sunset = moment.unix(day.sunsetTime).format("h:mm");

	return (
		<Container onClick={() => setActivePeriod(index)}>
			<Header>
				<h1>{timeDay}</h1>
				<Summary>
					<Info>
						{tempLow}&deg; / {tempHigh}&deg;
					</Info>
					<Icon
						className={`wi wi-${day.icon}`}
						fontSize="1.125rem"
						color="#718096"
					/>
				</Summary>
			</Header>
			{activePeriod === index && (
				<Body>
					<h1>{timeDate}</h1>
					<h1>{day.summary}</h1>
					<Grid
						moonphase={moonphase}
						cloudCover={cloudCover}
						windSpeed={windSpeed}
						humidity={humidity}
						visibility={visibility}
						precipProb={precipProb}
					/>
					<h1>
						<Icon className="wi wi-sunrise" />
						{sunrise}
					</h1>
					<h1>
						<Icon className="wi wi-sunset" />
						{sunset}
					</h1>
				</Body>
			)}
		</Container>
	);
};

const Container = styled.div`
	margin-bottom: 0.75rem;
	padding: 1rem;
	border-radius: 4px;
	background: #ffffff;
	box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
		0 2px 4px -1px rgba(0, 0, 0, 0.06);
	&:hover {
		cursor: pointer;
	}
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Summary = styled.div`
	width: 26%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Info = styled.h3`
	font-size: 0.875rem;
	color: #2d3748;
`;

const Body = styled.div`
	margin-top: 1.25rem;
`;

export default Day;
