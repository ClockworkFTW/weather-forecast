import React from "react";
import styled from "styled-components";

const Error = ({ error }) => (
	<Wrapper>
		<Container>
			<h1>Something went wrong...</h1>;
		</Container>
	</Wrapper>
);

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Container = styled.div`
	text-align: center;
`;

export default Error;
