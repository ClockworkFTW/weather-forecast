import React from "react";
import styled from "styled-components";

import { Icon } from "../common";

const Grid = props => {
	const {
		moonphase,
		cloudCover,
		windSpeed,
		humidity,
		visibility,
		precipProb
	} = props;

	return (
		<GridContainer>
			<GridItem>
				<Icon
					className="wi wi-night-clear"
					margin="0 0.375rem 0 0"
					fontSize="1.125rem"
					color="#3894fb"
				/>
				<Info>{moonphase}%</Info>
			</GridItem>
			<GridItem>
				<Icon
					className="wi wi-cloud"
					margin="0 0.375rem 0 0"
					fontSize="1.125rem"
					color="#3894fb"
				/>
				<Info>{cloudCover}%</Info>
			</GridItem>
			<GridItem>
				<Icon
					className="wi wi-strong-wind"
					margin="0 0.375rem 0 0"
					fontSize="1.125rem"
					color="#3894fb"
				/>
				<Info>{windSpeed}mph</Info>
			</GridItem>
			<GridItem>
				<Icon
					className="wi wi-umbrella"
					margin="0 0.375rem 0 0"
					fontSize="1.125rem"
					color="#3894fb"
				/>
				<Info>{humidity}%</Info>
			</GridItem>
			<GridItem>
				<Icon
					className="wi wi-smoke"
					margin="0 0.375rem 0 0"
					fontSize="1.125rem"
					color="#3894fb"
				/>
				<Info>{visibility}%</Info>
			</GridItem>
			<GridItem>
				<Icon
					className="wi wi-raindrops"
					margin="0 0.375rem 0 0"
					fontSize="1.125rem"
					color="#3894fb"
				/>
				<Info>{precipProb}%</Info>
			</GridItem>
		</GridContainer>
	);
};

const GridContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	margin: 0.75rem 0;
`;

const GridItem = styled.div`
	display: flex;
	align-items: center;
	padding: 0.5rem 0;
`;

const Info = styled.h3`
	font-size: 1rem;
	font-weight: 500;
	color: #353344;
`;

export default Grid;
