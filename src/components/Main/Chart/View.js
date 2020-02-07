import React from "react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis } from "recharts";

const View = ({ data }) => (
	<ResponsiveContainer width="100%" height={400}>
		<AreaChart data={data}>
			<defs>
				<linearGradient id="colorY" x1="0" y1="0" x2="0" y2="1">
					<stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
					<stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
				</linearGradient>
			</defs>
			<XAxis dataKey="x" />
			<YAxis dataKey="y" type="number" domain={["auto", "auto"]} />
			<Area
				type="monotone"
				dataKey="y"
				stroke="#8884d8"
				fillOpacity={1}
				fill="url(#colorY)"
			/>
		</AreaChart>
	</ResponsiveContainer>
);

export default View;
