import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import moment from "moment";

import { setPeriodColor } from "../../../../util";
import Select from "./Select";
import View from "./View";

const Chart = ({ data }) => {
	const [prop, setProp] = useState("temperature");
	const [chartHeight, setChartHeight] = useState(null);

	const chartRef = useRef(null);

	useEffect(() => {
		setChartHeight(chartRef.current.offsetHeight);
	}, [setChartHeight]);

	const chartData = data.hourly.data.map(e => {
		const y = prop === "precipProbability" ? e[prop] * 100 : e[prop];
		const x = moment.unix(e.time).format("hA");
		return { x, y };
	});

	chartData.length = 25;

	const color = setPeriodColor(
		data.currently.time,
		data.daily.data[0].sunriseTime,
		data.daily.data[0].sunsetTime
	);

	return (
		<Container ref={chartRef}>
			<Select prop={prop} setProp={setProp} />
			<View
				height={chartHeight - 20}
				color={color}
				data={chartData}
				prop={prop}
			/>
		</Container>
	);
};

const Container = styled.div`
	flex: 1;
	margin: 20px 0 30px 0;
	padding: 5px;
	border-radius: 4px;
	background: #ffffff;
	box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
		0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

export default Chart;
