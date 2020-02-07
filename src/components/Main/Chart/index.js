import React, { useState } from "react";
import moment from "moment";

import Select from "./Select";
import View from "./View";

const Chart = ({ data }) => {
	const [prop, setProp] = useState("temperature");

	const chartData = data.map(e => {
		const y = e[prop];
		const x = moment.unix(e.time).format("hh");
		return { x, y };
	});

	return (
		<div>
			<Select setProp={setProp} />
			<View data={chartData} prop={prop} />
		</div>
	);
};

export default Chart;
