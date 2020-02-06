import React from "react";
import styled from "styled-components";
import moment from "moment";

const Day = ({ data }) => (
	<Container>
		<h4>{moment.unix(data.time).format("MMM Do, YYYY")}</h4>
		<h3>{data.summary}</h3>
		<p>{data.temperatureLow}</p>
		<p>{data.temperatureHigh}</p>
	</Container>
);

const Container = styled.div`
	margin: 10px;
	padding: 10px;
	border: 1px solid black;
	border-radius: 4px;
`;

export default Day;
