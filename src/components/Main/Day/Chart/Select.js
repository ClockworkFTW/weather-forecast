import React from "react";

const Select = ({ setProp }) => (
	<div>
		<button onClick={() => setProp("temperature")}>temperature</button>
		<button onClick={() => setProp("windSpeed")}>wind speed</button>
		<button onClick={() => setProp("precipProbability")}>
			precipitation
		</button>
	</div>
);

export default Select;
