import React, { useState } from "react";
import styled from "styled-components";
import moment from "moment";

import Select from "./Select";
import View from "./View";

const Chart = ({ width, height, data }) => {
	const [prop, setProp] = useState("temperature");

	const chartData = data.map(e => {
		const y = e[prop];
		const x = moment.unix(e.time).format("HH:mm");
		return { x, y };
	});

	chartData.length = 12;

	return (
		<Container>
			<Select setProp={setProp} />
			<View width={width} height={height} data={chartData} prop={prop} />
		</Container>
	);
};

const Container = styled.div`
	padding: 10px;
	border-radius: 4px;
	background: #ffffff;
	box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
		0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

export default Chart;
