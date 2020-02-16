import React from "react";
import { Link, withRouter } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";

import { IconSVG } from "../common";
import home from "../../assets/icons/svg/home.svg";
import grid from "../../assets/icons/svg/grid.svg";

const Toggle = ({ location }) => {
	const toggle = location.pathname === "/weather-forecast/day";
	return (
		<Container
			variants={button}
			initial="rest"
			whileHover="hover"
			whileTap="pressed"
		>
			<RouterLink
				to={toggle ? "/weather-forecast/week" : "/weather-forecast/day"}
			>
				{toggle ? (
					<IconSVG icon={grid} width="1.5rem" height="1.5rem" />
				) : (
					<IconSVG icon={home} width="1.5rem" height="1.5rem" />
				)}
			</RouterLink>
		</Container>
	);
};

const button = {
	rest: { scale: 1, opacity: 0.8 },
	hover: { scale: 1.1, opacity: 1 },
	pressed: { scale: 0.95, opacity: 1 }
};

const Container = styled(motion.div)`
	margin-left: 4px;
`;

const RouterLink = styled(Link)`
	display: block;
	padding: 4px;
	text-decoration: none;
	font-size: 1.125rem;
	font-weight: 500;
	color: #2d3748;
`;

export default withRouter(Toggle);
