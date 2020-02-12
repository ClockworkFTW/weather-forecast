import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Toggle = ({ location }) => {
	const toggle = location.pathname === "/day";
	return (
		<RouterLink to={toggle ? "/week" : "/day"}>
			{toggle ? "X" : "O"}
		</RouterLink>
	);
};

const RouterLink = styled(Link)`
	text-decoration: none;
	font-size: 1.125rem;
	font-weight: 500;
	color: #2d3748;
`;

export default withRouter(Toggle);
