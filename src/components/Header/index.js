import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import Search from "./Search";
import Toggle from "./Toggle";

const Header = ({ setHeaderHeight }) => {
	const headerRef = useRef(null);

	useEffect(() => {
		setHeaderHeight(headerRef.current.offsetHeight);
	}, [setHeaderHeight]);

	return (
		<Wrapper ref={headerRef}>
			<Container>
				<Search />
				<Toggle />
			</Container>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	position: relative;
	background: #ffffff;
	box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
		0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

const Container = styled.div`
	max-width: 600px;
	margin: 0 auto;
	padding: 1.25rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export default Header;
