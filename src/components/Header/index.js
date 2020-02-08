import React from "react";
import styled from "styled-components";

import Search from "./Search";

const Header = ({ location, setData, setError }) => (
	<Wrapper>
		<Container>
			<Search location={location} setData={setData} setError={setError} />
		</Container>
	</Wrapper>
);

const Wrapper = styled.div`
	z-index: 100;
	position: fixed;
	top: 0px;
	width: 100%;
	padding: 10px;
	background: #ffffff;
	box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
`;

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export default Header;
