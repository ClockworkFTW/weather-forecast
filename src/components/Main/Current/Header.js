import React from "react";
import styled from "styled-components";

import { Temp, WeatherIcon } from "../../common";

const Header = ({
	currentTemp,
	weatherIcon,
	highTemp,
	lowTemp,
	apparentTemp,
	summary
}) => (
	<Container>
		<Row>
			<Temp>{currentTemp}&deg;</Temp>
			<WeatherIcon className={weatherIcon} />
		</Row>
		<Row>
			<Info>
				{summary}{" "}
				<span>
					{highTemp}&deg;/{lowTemp}&deg;
				</span>
			</Info>
			<Info>Feels like {apparentTemp}&deg;</Info>
		</Row>
	</Container>
);

const Container = styled.div`
	margin-bottom: 30px;
`;

const Row = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Info = styled.h4`
	font-size: 0.875rem;
	color: #718096;
`;

export default Header;
