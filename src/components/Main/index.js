import React from "react";
import styled from "styled-components";

import Current from "./Current";
import Chart from "./Chart";
import Week from "./Week";

const Main = ({ data }) => (
	<Container>
		<Current currentData={data.currently} dayData={data.daily.data[0]} />
		{/* <Chart data={data.hourly.data} /> */}
		<Week data={data.daily.data} />
	</Container>
);

const Container = styled.div`
	margin-top: 45px;
	padding: 10px;
	background: #faf9fa;
`;

export default Main;
