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
		<Container ref={headerRef}>
			<Search />
			<Toggle />
		</Container>
	);
};

const Container = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1.25rem;
	background: #ffffff;
	box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
		0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

export default Header;
