import React, { useState } from "react";
import styled from "styled-components";
import moment from "moment";

import Select from "./Select";
import View from "./View";

const Chart = ({ width, height, data }) => {
	const [prop, setProp] = useState("temperature");

	const chartData = data.hourly.data.map(e => {
		const y = e[prop];
		const x = moment.unix(e.time).format("hA");
		return { x, y };
	});

	chartData.length = 25;

	return (
		<Container>
			<Select setProp={setProp} />
			<View width={width} height={height} data={chartData} prop={prop} />
		</Container>
	);
};

const Container = styled.div`
	margin: 20px 0;
	padding: 10px 5px;
	border-radius: 4px;
	background: #ffffff;
	box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
		0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

export default Chart;
