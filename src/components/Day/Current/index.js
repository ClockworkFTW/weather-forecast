import React from "react";
import styled from "styled-components";
import moment from "moment";

import Header from "./Header";
import Body from "./Body";

const Current = ({ data, activePeriod }) => {
	const mergedData = [data.currently, ...data.hourly.data];
	const focusData = mergedData.find((e, index) => index === activePeriod);
	const todayData = data.daily.data[0];

	const currentTemp = Math.round(focusData.temperature);
	const weatherIcon = `wi wi-${focusData.icon}`;
	const summary = focusData.summary;
	const lowTemp = Math.round(todayData.temperatureLow);
	const highTemp = Math.round(todayData.temperatureHigh);
	const apparentTemp = Math.round(focusData.apparentTemperature);
	const sunrise = moment.unix(todayData.sunriseTime).format("h:mma");
	const sunset = moment.unix(todayData.sunsetTime).format("h:mma");
	const windSpeed = Math.round(focusData.windSpeed);
	const precipProb = Math.round(focusData.precipProbability * 100);
	const uvIndex = focusData.uvIndex;
	const humidity = Math.round(focusData.humidity * 100);

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
			<Body
				sunrise={sunrise}
				sunset={sunset}
				windSpeed={windSpeed}
				precipProb={precipProb}
				uvIndex={uvIndex}
				humidity={humidity}
			/>
		</Container>
	);
};

const Container = styled.div``;

export default Current;
