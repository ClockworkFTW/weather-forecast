import React from "react";
import styled from "styled-components";

const Select = ({ prop, setProp }) => (
	<Container>
		<Button
			active={prop === "temperature"}
			onClick={() => setProp("temperature")}
		>
			temperature
		</Button>
		<Button
			active={prop === "windSpeed"}
			onClick={() => setProp("windSpeed")}
		>
			wind speed
		</Button>
		<Button
			active={prop === "precipProbability"}
			onClick={() => setProp("precipProbability")}
		>
			precipitation
		</Button>
	</Container>
);

const Container = styled.div`
	padding: 8px 8px 0 8px;
`;

const Button = styled.button`
	margin-right: 4px;
	padding: 4px 8px;
	border: none;
	outline: none;
	border-radius: 4px;
	background: ${props => (props.active ? "#3894fb" : "none")};
	color: ${props => (props.active ? "#ffffff" : "#a0aec0")};
	font-family: inherit;
	font-size: 0.75rem;
	text-transform: capitalize;
	&:hover {
		cursor: pointer;
		background: #3894fb;
		color: #ffffff;
	}
`;

export default Select;
