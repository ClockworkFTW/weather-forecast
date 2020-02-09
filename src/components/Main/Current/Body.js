import React from "react";
import styled from "styled-components";

import { CurrInfo, CurrIcon } from "../../common";

const Body = props => {
	const { sunrise, sunset, windSpeed, humidity, uvIndex, precipProb } = props;
	return (
		<GridContainer>
			<GridItem>
				<CurrIcon className="wi wi-sunrise" color="#3894fb" />
				<CurrInfo>{sunrise}</CurrInfo>
			</GridItem>
			<GridItem>
				<CurrIcon className="wi wi-sunset" color="#3894fb" />
				<CurrInfo>{sunset}</CurrInfo>
			</GridItem>
			<GridItem>
				<CurrIcon className="wi wi-strong-wind" color="#3894fb" />
				<CurrInfo>{windSpeed}mph</CurrInfo>
			</GridItem>
			<GridItem>
				<CurrIcon className="wi wi-umbrella" color="#3894fb" />
				<CurrInfo>{humidity}%</CurrInfo>
			</GridItem>
			<GridItem>
				<CurrIcon className="wi wi-day-sunny" color="#3894fb" />
				<CurrInfo>{uvIndex}</CurrInfo>
			</GridItem>
			<GridItem>
				<CurrIcon className="wi wi-raindrops" color="#3894fb" />
				<CurrInfo>{precipProb}%</CurrInfo>
			</GridItem>
		</GridContainer>
	);
};

const GridContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	margin: 20px 0;
`;

const GridItem = styled.div`
	display: flex;
	align-items: center;
	padding: 0.5rem 0;
`;

export default Body;
