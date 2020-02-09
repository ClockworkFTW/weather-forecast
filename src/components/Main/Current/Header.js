import React from "react";
import styled from "styled-components";

import { Temp, WeatherIcon } from "../../common";

const Header = ({ currentTemp, highTemp, lowTemp, apparentTemp, summary }) => (
	<Container>
		<Row>
			<Temp>{currentTemp}&deg;</Temp>
			<WeatherIcon className="wi wi-day-cloudy" />
		</Row>
		<Row>
			<div>
				<h3>
					{summary}{" "}
					<span>
						{highTemp}&deg; / {lowTemp}&deg;
					</span>
				</h3>
			</div>
			<div>
				<h3>Feels like {apparentTemp}&deg;</h3>
			</div>
		</Row>
	</Container>
);

const Container = styled.div``;

const Row = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export default Header;
