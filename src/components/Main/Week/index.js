import React, { useState } from "react";
import { connect } from "react-redux";
import { motion } from "framer-motion";
import styled from "styled-components";

import { pageVariants, pageTransition } from "../../common";
import Day from "./Day";

const Week = ({ data, pathname }) => {
	const [activePeriod, setActivePeriod] = useState(0);
	return (
		data && (
			<Container
				initial={
					pathname === "/weather-forecast/day" ? "left" : "right"
				}
				animate="animate"
				exit={pathname === "/weather-forecast/week" ? "right" : "left"}
				variants={pageVariants}
				transition={pageTransition}
			>
				{data.daily.data.map((day, index) => (
					<Day
						key={day.time}
						day={day}
						index={index}
						activePeriod={activePeriod}
						setActivePeriod={setActivePeriod}
					/>
				))}
			</Container>
		)
	);
};

const Container = styled(motion.div)``;

const mapStateToProps = state => ({ data: state.forecast.data });

export default connect(mapStateToProps)(Week);
