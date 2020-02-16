import React from "react";
import styled from "styled-components";
import {
	ResponsiveContainer,
	AreaChart,
	Area,
	LabelList,
	XAxis,
	YAxis
} from "recharts";

const View = ({ height, color, data }) => (
	<ResponsiveContainer height={height}>
		<AreaChart
			data={data}
			margin={{ top: 20, right: 20, bottom: 5, left: 20 }}
		>
			<defs>
				<linearGradient id="colorY" x1="0" y1="0" x2="0" y2="1">
					<stop offset="5%" stopColor={color} stopOpacity={0.8} />
					<stop offset="95%" stopColor={color} stopOpacity={0} />
				</linearGradient>
			</defs>
			<XAxis
				dataKey="x"
				interval={3}
				tickLine={false}
				axisLine={false}
				fontSize="0.75rem"
				stroke="#A0AEC0"
			/>
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
				<LabelList dataKey="y" content={renderCustomizedLabel} />
			</Area>
		</AreaChart>
	</ResponsiveContainer>
);

const renderCustomizedLabel = ({ x, y, value }) => (
	<G>
		<text
			x={x}
			y={y - 15}
			fontSize="0.75rem"
			fill="#A0AEC0"
			position="top"
			offset={10}
			textAnchor="middle"
			dominantBaseline="middle"
		>
			{Math.round(value)}
		</text>
	</G>
);

const G = styled.g`
	display: none;
	:nth-child(4n + 1) {
		display: inherit;
	}
`;

export default View;
