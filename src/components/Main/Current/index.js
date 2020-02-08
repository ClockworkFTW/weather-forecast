import React from "react";
import styled from "styled-components";
import moment from "moment";

import { Temp, Info, WeatherIcon, Icon } from "../../common";

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
			<div>
				<div>
					<Temp>{currentTemp}&deg;</Temp>
					<WeatherIcon className="wi wi-day-cloudy" />
				</div>
				<div>
					<h3>
						{summary}{" "}
						<span>
							{highTemp}&deg; / {lowTemp}&deg;
						</span>
					</h3>
					<h3>Feels like {apparentTemp}&deg;</h3>
				</div>
			</div>
			<GridContainer>
				<GridItem>
					<Icon className="wi wi-sunrise" color="#3894fb" />
					<Info>{sunrise}</Info>
				</GridItem>
				<GridItem>
					<Icon className="wi wi-sunset" color="#3894fb" />
					<Info>{sunset}</Info>
				</GridItem>
				<GridItem>
					<Icon className="wi wi-strong-wind" color="#3894fb" />
					<Info>{windSpeed}mph</Info>
				</GridItem>
				<GridItem>
					<Icon className="wi wi-umbrella" color="#3894fb" />
					<Info>{humidity}%</Info>
				</GridItem>
				<GridItem>
					<Icon className="wi wi-day-sunny" color="#3894fb" />
					<Info>{uvIndex}</Info>
				</GridItem>
				<GridItem>
					<Icon className="wi wi-raindrops" color="#3894fb" />
					<Info>{precipProb}%</Info>
				</GridItem>
			</GridContainer>
		</Container>
	);
};

const Container = styled.div``;

const GridContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr;
`;

const GridItem = styled.div`
	display: flex;
	align-items: center;
	padding: 0.5rem 0;
`;

export default Current;
