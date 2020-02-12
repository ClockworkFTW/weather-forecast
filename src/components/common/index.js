import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	html {
		box-sizing: border-box;
	}
	*, *:before, *:after {
		box-sizing: inherit;
	}
	body {
		font-family: 'Roboto', sans-serif;
		font-size: 16px;
	}
`;

export const Temp = styled.h1`
	font-family: "Lexend Deca";
	font-size: 4rem;
	color: #353344;
`;

export const CurrInfo = styled.h3`
	font-size: 1rem;
	font-weight: 500;
	color: #353344;
`;

export const WeatherIcon = styled.i`
	font-size: 3.5rem;
	color: #f7af0a;
`;

export const CurrIcon = styled.i`
	margin-right: 0.375rem;
	font-size: 1.125rem;
	color: #3894fb;
`;

export const TimeIcon = styled.i`
	margin: 1rem 0;
	font-size: 1.125rem;
`;

export const Icon = styled.i`
	margin: ${props => props.margin};
	font-size: ${props => props.fontSize};
	color: ${props => props.color};
`;
