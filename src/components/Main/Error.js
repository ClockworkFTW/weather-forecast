import React from "react";
import styled from "styled-components";

const Error = ({ error }) => (
	<Wrapper>
		<Container>
			<h1>{error.message}</h1>
		</Container>
	</Wrapper>
);

const Wrapper = styled.div`
	width: 100vw;
	height: calc(100vh - 45px);
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Container = styled.div`
	text-align: center;
`;

export default Error;
