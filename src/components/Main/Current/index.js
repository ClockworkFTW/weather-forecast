import React from "react";
import styled from "styled-components";
import moment from "moment";

import Header from "./Header";
import Body from "./Body";

const Current = ({ data, activePeriod }) => {
	let mergedData = [data.currently, ...data.hourly.data];
	mergedData.length = 24;
	const focusData = mergedData.find((e, index) => index === activePeriod);

	const currentTemp = Math.round(focusData.temperature);
	const weatherIcon = `wi wi-${focusData.icon}`;
	const summary = focusData.summary;
	const lowTemp = Math.round(data.daily.data[0].temperatureLow);
	const highTemp = Math.round(data.daily.data[0].temperatureHigh);
	const apparentTemp = Math.round(focusData.apparentTemperature);
	const sunrise = moment.unix(data.daily.data[0].sunriseTime).format("h:mma");
	const sunset = moment.unix(data.daily.data[0].sunsetTime).format("h:mma");
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
