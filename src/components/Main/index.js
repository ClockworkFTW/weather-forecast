import React, { useState } from "react";
import styled from "styled-components";

import Current from "./Current";
import Chart from "./Chart";
import Time from "./Time";
import Error from "./Error";

const Main = ({ headerHeight, data, error }) => {
	const [focusTime, setFocusTime] = useState(data.currently.time);
	return !error ? (
		<Container headerHeight={headerHeight}>
			<Current
				focusTime={focusTime}
				data={data}
				dayData={data.daily.data[0]}
			/>
			<Chart width="100%" height={200} data={data.hourly.data} />
			<Time
				focusTime={focusTime}
				setFocusTime={setFocusTime}
				data={data}
			/>
		</Container>
	) : (
		<Error error={error} />
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100vh;
	padding: ${props => `${props.headerHeight + 30}px 20px 30px 20px`};
	background: #faf9fa;
`;

export default Main;
