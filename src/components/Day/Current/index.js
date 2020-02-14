import React from "react";
import styled from "styled-components";
import moment from "moment";

import Grid from "../../common/Grid";
import Header from "./Header";

const Current = ({ data, activePeriod }) => {
	// Format data
	const mergedData = [data.currently, ...data.hourly.data];
	const focusData = mergedData.find((e, index) => index === activePeriod);
	const todayData = data.daily.data[0];

	// Header data
	const currentTemp = Math.round(focusData.temperature);
	const weatherIcon = `wi wi-${focusData.icon}`;
	const summary = focusData.summary;
	const lowTemp = Math.round(todayData.temperatureLow);
	const highTemp = Math.round(todayData.temperatureHigh);
	const apparentTemp = Math.round(focusData.apparentTemperature);

	// Grid data
	const items = [
		{
			value: moment.unix(todayData.sunriseTime).format("h:mma"),
			icon: "sunrise"
		},
		{
			value: moment.unix(todayData.sunsetTime).format("h:mma"),
			icon: "sunset"
		},
		{ value: focusData.uvIndex, icon: "day-sunny" },
		{
			value: `${Math.round(focusData.windSpeed)} mph`,
			icon: "strong-wind"
		},
		{
			value: `${Math.round(focusData.precipProbability * 100)}%`,
			icon: "umbrella"
		},
		{ value: `${Math.round(focusData.humidity * 100)}%`, icon: "raindrops" }
	];

	return (
		<Container>
			<Header
				currentTemp={currentTemp}
				weatherIcon={weatherIcon}
				lowTemp={lowTemp}
				highTemp={highTemp}
				apparentTemp={apparentTemp}
				summary={summary}
			/>
			<Grid items={items} />
		</Container>
	);
};

const Container = styled.div``;

export default Current;
