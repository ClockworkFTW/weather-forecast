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
	box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
		0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export default Header;
