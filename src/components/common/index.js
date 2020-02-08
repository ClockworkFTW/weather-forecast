import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
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

export const Info = styled.h3`
	font-size: 1rem;
	font-weight: 500;
	color: #353344;
`;

export const WeatherIcon = styled.i`
	font-size: 3.5rem;
	color: #f7af0a;
`;

export const Icon = styled.i`
	margin-right: 0.375rem;
	font-size: 1.125rem;
	color: #3894fb;
`;
