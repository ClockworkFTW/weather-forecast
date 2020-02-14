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
		background: #faf9fa;
	}
`;

export const Layout = styled.div`
	max-width: 800px;
	margin: 0 auto;
`;

export const Icon = styled.i`
	margin: ${props => props.margin};
	font-size: ${props => props.fontSize};
	color: ${props => props.color};
`;

export const IconSVG = styled.div`
	width: ${props => props.width};
	height: ${props => props.height};
	background-image: ${props => `url(${props.icon})`};
	background-size: cover;
`;
