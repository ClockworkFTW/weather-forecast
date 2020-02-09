import React from "react";
import styled from "styled-components";
import moment from "moment";

import Period from "./Period";

const Week = ({ focusTime, setFocusTime, data }) => {
	const today = [data.currently, ...data.hourly.data];
	today.length = 12;
	return (
		<Container>
			<h1>{moment.unix(focusTime).format("dddd - DD MMM")}</h1>
			{today.map((period, index) => (
				<Period
					key={period.time}
					focusTime={focusTime}
					setFocusTime={setFocusTime}
					data={period}
					index={index}
				/>
			))}
		</Container>
	);
};

const Container = styled.div`
	overflow-x: scroll;
	overflow-y: hidden;
	white-space: nowrap;
`;

export default Week;
