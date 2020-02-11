import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { fetchForecast } from "../../reducers/forecast";

const Search = ({ fetchForecast, data, pending }) => {
	const [term, setTerm] = useState("");

	const handleSearch = () => {
		fetchForecast(term);
		setTerm("");
	};

	const renderPlaceholder = () => {
		if (pending) {
			return "Loading...";
		} else if (data) {
			return data.location;
		} else {
			return "";
		}
	};

	return (
		<Container>
			<Input
				type="text"
				placeholder={renderPlaceholder()}
				value={term}
				onChange={event => setTerm(event.target.value)}
			/>
			<Button onClick={handleSearch}>Q</Button>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Input = styled.input`
	outline: none;
	border: none;
	background: none;
	font-family: inherit;
	font-size: 1.125rem;
	font-weight: 500;
	text-transform: capitalize;
	color: #2d3748;
	&::placeholder {
		color: #2d3748;
	}
`;

const Button = styled.button`
	outline: none;
	border: none;
	background: none;
	font-size: 1.125rem;
	font-weight: 600;
	color: #2d3748;
	font-family: inherit;
	&:hover {
		cursor: pointer;
	}
`;

const mapStateToProps = state => ({
	data: state.forecast.data,
	pending: state.forecast.pending
});

export default connect(mapStateToProps, { fetchForecast })(Search);
