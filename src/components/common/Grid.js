import React from "react";
import styled from "styled-components";

import { Icon } from "../common";

const Grid = ({ items, margin }) => (
	<GridContainer margin={margin}>
		{items.map((item, index) => (
			<GridItem key={index}>
				<Icon
					className={`wi wi-${item.icon}`}
					margin=" 0 0.375rem 0 0"
					fontSize="1.125rem"
					color="#3894fb"
				/>
				<Info>{item.value}</Info>
			</GridItem>
		))}
	</GridContainer>
);

const GridContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	margin: ${props => props.margin};
`;

const GridItem = styled.div`
	display: flex;
	align-items: center;
	padding: 0.5rem 0;
`;

const Info = styled.span`
	font-size: 1rem;
	font-weight: 500;
	color: #353344;
`;

export default Grid;
