import React from "react";
import styled from "styled-components";
import moment from "moment";

import Header from "./Header";
import Body from "./Body";

const Current = ({ currentData, dayData }) => {
	const currentTemp = Math.round(currentData.temperature);
	const summary = currentData.summary;
	const highTemp = Math.round(dayData.temperatureHigh);
	const lowTemp = Math.round(dayData.temperatureHigh);
	const apparentTemp = Math.round(currentData.apparentTemperature);
	const sunrise = moment.unix(dayData.sunriseTime).format("h:mma");
	const sunset = moment.unix(dayData.sunsetTime).format("h:mma");
	const windSpeed = Math.round(currentData.windSpeed);
	const precipProb = Math.round(currentData.precipProbability * 100);
	const uvIndex = currentData.uvIndex;
	const humidity = Math.round(currentData.humidity * 100);

	return (
		<Container>
			<Header
				currentTemp={currentTemp}
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
