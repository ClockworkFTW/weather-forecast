import React from "react";
import styled from "styled-components";

import Period from "./Period";

const Week = ({ data }) => (
	<Container>
		{data.map((period, index) => (
			<Period key={period.time} data={period} index={index} />
		))}
	</Container>
);

const Container = styled.div`
	overflow-x: scroll;
	overflow-y: hidden;
	white-space: nowrap;
`;

export default Week;
