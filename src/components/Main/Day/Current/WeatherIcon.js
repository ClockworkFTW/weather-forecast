import React from "react";
import styled from "styled-components";

import { Icon } from "../../../common";

const WeatherIcon = ({ icon }) => (
	<Container>
		<Icon className={icon} fontSize="3.5rem" color="#f7af0a" />
	</Container>
);

const Container = styled.div``;

export default WeatherIcon;
