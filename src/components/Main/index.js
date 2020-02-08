import React from "react";
import styled from "styled-components";

import Current from "./Current";
import Chart from "./Chart";
import Week from "./Week";
import Error from "./Error";

const Main = ({ data, error }) =>
	!error ? (
		<Container>
			<Current
				currentData={data.currently}
				dayData={data.daily.data[0]}
			/>
			{/* <Chart data={data.hourly.data} /> */}
			<Week data={data.daily.data} />
		</Container>
	) : (
		<Error error={error} />
	);

const Container = styled.div`
	margin-top: 45px;
	padding: 20px;
	background: #faf9fa;
`;

export default Main;
