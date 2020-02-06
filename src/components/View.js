import React from "react";

import Week from "./Week";
import Loader from "./Loader";

const View = ({ data }) =>
	data ? (
		<div>
			<Week data={data.daily.data} />
		</div>
	) : (
		<Loader />
	);

export default View;
