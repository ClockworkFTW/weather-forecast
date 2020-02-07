import React from "react";
import styled from "styled-components";
import moment from "moment";

import { Icon } from "../../common";

const Current = ({ currentData, dayData }) => {
	const currentTemp = Math.round(currentData.temperature);
	const summary = currentData.summary;
	const highTemp = Math.round(dayData.temperatureHigh);
	const lowTemp = Math.round(dayData.temperatureHigh);
	const apparentTemp = Math.round(currentData.apparentTemperature);
	const sunrise = moment.unix(dayData.sunriseTime).format("h:mma");
	const sunset = moment.unix(dayData.sunsetTime).format("h:mma");
	const windSpeed = Math.round(currentData.windSpeed);
	const precipProb = Math.round(currentData.precipProbability) * 100;
	const uvIndex = currentData.uvIndex;

	return (
		<Container>
			<h1>{currentTemp}&deg;</h1>
			<h3>
				{summary}{" "}
				<span>
					{highTemp}&deg; / {lowTemp}&deg;
				</span>
			</h3>
			<h3>Feels like {apparentTemp}&deg;</h3>
			<ul>
				<li>
					{sunrise}
					<Icon className="wi wi-sunrise" />
				</li>
				<li>
					{sunset}
					<Icon className="wi wi-sunset" />
				</li>
				<li>{windSpeed}mph</li>
				<li>{precipProb}%</li>
				<li>{uvIndex}</li>
			</ul>
		</Container>
	);
};

const Container = styled.div``;

export default Current;
