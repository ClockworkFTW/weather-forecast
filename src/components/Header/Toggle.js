import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

import { IconSVG } from "../common";
import home from "../../assets/icons/svg/home.svg";
import grid from "../../assets/icons/svg/grid.svg";

const Toggle = ({ location }) => {
	const toggle = location.pathname === "/day";
	return (
		<RouterLink to={toggle ? "/week" : "/day"}>
			{toggle ? (
				<IconSVG icon={grid} width="1.5rem" height="1.5rem" />
			) : (
				<IconSVG icon={home} width="1.5rem" height="1.5rem" />
			)}
		</RouterLink>
	);
};

const RouterLink = styled(Link)`
	padding: 4px;
	text-decoration: none;
	font-size: 1.125rem;
	font-weight: 500;
	color: #2d3748;
`;

export default withRouter(Toggle);
