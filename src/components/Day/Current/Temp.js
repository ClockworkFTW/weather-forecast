import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import CountUp from "react-countup";

const Temp = ({ currentTemp }) => {
	const usePrevious = value => {
		const ref = useRef();
		useEffect(() => {
			ref.current = value;
		});
		return ref.current;
	};

	const prevTemp = usePrevious(currentTemp);

	return (
		<Container>
			<CountUp start={prevTemp} end={currentTemp} />
			&deg;
		</Container>
	);
};

const Container = styled.div`
	font-family: "Lexend Deca";
	font-size: 4.5rem;
	color: #353344;
`;

export default Temp;
