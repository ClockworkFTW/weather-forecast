import React from "react";
import styled from "styled-components";

import { Icon } from "../../common";
import Temp from "./Temp";

const Header = ({
	currentTemp,
	weatherIcon,
	lowTemp,
	highTemp,
	apparentTemp,
	summary
}) => (
	<Container>
		<Row>
			<Temp currentTemp={currentTemp} />
			<Icon className={weatherIcon} fontSize="3.5rem" color="#f7af0a" />
		</Row>
		<Row>
			<Summary>
				{summary}
				<Temps>
					{lowTemp}&deg; / {highTemp}&deg;
				</Temps>
			</Summary>
			<Apparent>Feels like {apparentTemp}&deg;</Apparent>
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
	:nth-last-child(1) {
		margin-top: 1.25rem;
	}
`;

const Summary = styled.h1`
	font-size: 0.875rem;
	font-weight: 500;
	color: #2d3748;
`;
const Temps = styled.span`
	margin-left: 1rem;
	font-weight: 400;
`;
const Apparent = styled.h3`
	font-size: 0.875rem;
	color: #2d3748;
`;

export default Header;
