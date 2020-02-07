import React from "react";
import styled from "styled-components";

const Loader = () => (
	<Wrapper>
		<Container>
			<h1>Loading...</h1>
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

export default Loader;
