import React from "react";
import styled from "styled-components";

import { Icon } from "../common";

const UV = ({ uvIndex, uvTime, sunrise, sunset }) => (
	<Container>
		<Top>
			<h1>
				<Icon
					className="wi wi-day-sunny"
					margin="0 4px 0 0"
					fontSize="0.875rem"
				/>
				Max UV: {uvIndex}
			</h1>
		</Top>
		<Mid>
			<Icon
				className="wi wi-sunrise"
				fontSize="0.875rem"
				color="#2D3748"
			/>
			<span>|</span>
			<Icon
				className="wi wi-sunset"
				fontSize="0.875rem"
				color="#2D3748"
			/>
		</Mid>
		<Bot>
			<h1>{sunrise}</h1>
			<h1>{uvTime}</h1>
			<h1>{sunset}</h1>
		</Bot>
		<Background />
	</Container>
);

const Container = styled.div`
	width: 100%;
	height: 50px;
	position: relative;
`;

const Top = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 0.75rem;
	color: #2d3748;
`;

const Mid = styled.div`
	z-index: 10;
	position: absolute;
	top: 50%;
	left: 0;
	right: 0;
	transform: translateY(-50%);
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Bot = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 0.75rem;
	color: #2d3748;
`;

const Background = styled.div`
	position: absolute;
	top: 50%;
	left: 0;
	right: 0;
	transform: translateY(-50%);
	height: 5px;
	background: linear-gradient(
		to right,
		#f6f6f6 10%,
		#ffe97d 10% 20%,
		#ffda18 20% 30%,
		#ffb219 30% 40%,
		#ff3119 40% 60%,
		#ffb219 60% 70%,
		#ffda18 70% 80%,
		#ffe97d 80% 90%,
		#f6f6f6 90% 100%
	);
`;

export default UV;
