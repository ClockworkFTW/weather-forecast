import React from "react";
import styled from "styled-components";
import moment from "moment";

import { Icon } from "../../common";
import Grid from "../../common/Grid";
import UV from "./UV";

const Day = ({ day, index, activePeriod, setActivePeriod }) => {
	// Header data
	const timeDay = moment.unix(day.time).format("dddd");
	const timeDate = moment.unix(day.time).format("DD MMM - YYYY");
	const tempLow = Math.round(day.temperatureLow);
	const tempHigh = Math.round(day.temperatureHigh);

	// Body data
	const summary = day.summary;
	const windSpeed = Math.round(day.windSpeed);
	const windGust = Math.round(day.windGust);
	const windGustTime = moment.unix(day.windGustTime).format("ha");
	const windBearing = () => {
		const deg = day.windBearing;
		if (deg > 0 && deg < 90) {
			return "north east";
		} else if (deg > 90 && deg < 180) {
			return "south east";
		} else if (deg > 180 && deg < 270) {
			return "south west";
		} else {
			return "north west";
		}
	};

	// Grid data
	const items = [
		{ value: `${Math.round(day.moonPhase * 100)}%`, icon: "night-clear" },
		{ value: `${Math.round(day.cloudCover * 100)}%`, icon: "cloud" },
		{ value: `${Math.round(day.windSpeed)} mph`, icon: "strong-wind" },
		{ value: `${Math.round(day.humidity * 100)}%`, icon: "raindrops" },
		{
			value: `${Math.round(day.precipProbability * 100)}%`,
			icon: "umbrella"
		},
		{ value: `${day.visibility.toFixed(1)} miles`, icon: "day-haze" }
	];

	// UV data
	const uvIndex = day.uvIndex;
	const uvTime = moment.unix(day.uvIndexTime).format("h:mm a");
	const sunrise = moment.unix(day.sunriseTime).format("h:mm a");
	const sunset = moment.unix(day.sunsetTime).format("h:mm a");

	return (
		<Container onClick={() => setActivePeriod(index)}>
			<Header>
				<Weekday>{timeDay}</Weekday>
				<Temp>
					<Info>
						{tempLow}&deg; / {tempHigh}&deg;
					</Info>
					<Icon
						className={`wi wi-${day.icon}`}
						fontSize="1.125rem"
						color="#718096"
					/>
				</Temp>
			</Header>
			{activePeriod === index && (
				<Body>
					<WeekDate>{timeDate}</WeekDate>
					<Summary>
						{summary} Average winds of {windSpeed} mph from the{" "}
						{windBearing()} with wind gusts of up to {windGust} mph
						at {windGustTime}.
					</Summary>
					<Grid items={items} margin="1rem 0" />
					<UV
						uvIndex={uvIndex}
						uvTime={uvTime}
						sunrise={sunrise}
						sunset={sunset}
					/>
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

const Weekday = styled.h1`
	font-weight: 500;
	color: #2d3748;
`;

const Temp = styled.div`
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

const WeekDate = styled.h2`
	font-size: 0.875rem;
	color: #4a5568;
`;

const Summary = styled.p`
	margin-top: 1rem;
	line-height: 1.25rem;
	font-size: 0.875rem;
	color: #4a5568;
`;

export default Day;
