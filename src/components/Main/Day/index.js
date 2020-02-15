import React from "react";
import { connect } from "react-redux";
import { motion } from "framer-motion";
import styled from "styled-components";

import { pageVariants, pageTransition } from "../../common";
import Current from "./Current";
import Chart from "./Chart";
import Time from "./Time";

const Day = ({ data, activePeriod, pathname }) =>
	data && (
		<Container
			initial={pathname === "/day" ? "left" : "right"}
			animate="animate"
			exit={pathname === "/week" ? "right" : "left"}
			variants={pageVariants}
			transition={pageTransition}
		>
			<Current data={data} activePeriod={activePeriod} />
			<Chart width="100%" height={200} data={data} />
			<Time data={data} />
		</Container>
	);

const Container = styled(motion.div)`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const mapStateToProps = state => ({
	data: state.forecast.data,
	activePeriod: state.period
});

export default connect(mapStateToProps)(Day);
