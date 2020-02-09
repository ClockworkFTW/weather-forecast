import React from "react";
import {
	ResponsiveContainer,
	AreaChart,
	Area,
	LabelList,
	XAxis,
	YAxis
} from "recharts";

const View = ({ width, height, data }) => (
	<ResponsiveContainer width={width} height={height}>
		<AreaChart data={data}>
			<defs>
				<linearGradient id="colorY" x1="0" y1="0" x2="0" y2="1">
					<stop offset="5%" stopColor="#f8af0a" stopOpacity={0.8} />
					<stop offset="95%" stopColor="#f8af0a" stopOpacity={0} />
				</linearGradient>
			</defs>
			<XAxis dataKey="x" />
			<YAxis
				dataKey="y"
				type="number"
				domain={["auto", "auto"]}
				hide={true}
			/>
			<Area
				type="monotone"
				dataKey="y"
				stroke="#f8af0a"
				fillOpacity={1}
				fill="url(#colorY)"
			>
				<LabelList dataKey="y" position="top" />
			</Area>
		</AreaChart>
	</ResponsiveContainer>
);

export default View;
