import React, { useState } from "react";
import styled from "styled-components";
import moment from "moment";

import Header from "./Header";
import Body from "./Body";

const Current = ({ focusTime, data, dayData }) => {
	const x = [data.currently, ...data.hourly.data];
	const focusData = x.find(x => x.time === focusTime);

	const currentTemp = Math.round(focusData.temperature);
	const weatherIcon = `wi wi-${focusData.icon}`;
	const summary = focusData.summary;
	const highTemp = Math.round(dayData.temperatureHigh);
	const lowTemp = Math.round(dayData.temperatureHigh);
	const apparentTemp = Math.round(focusData.apparentTemperature);
	const sunrise = moment.unix(dayData.sunriseTime).format("h:mma");
	const sunset = moment.unix(dayData.sunsetTime).format("h:mma");
	const windSpeed = Math.round(focusData.windSpeed);
	const precipProb = Math.round(focusData.precipProbability * 100);
	const uvIndex = focusData.uvIndex;
	const humidity = Math.round(focusData.humidity * 100);

	return (
		<Container>
			<Header
				currentTemp={currentTemp}
				weatherIcon={weatherIcon}
				highTemp={highTemp}
				lowTemp={lowTemp}
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
