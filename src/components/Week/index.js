import React from "react";

import Day from "./Day";

const Week = ({ data }) => data.map(day => <Day key={day.time} data={day} />);

export default Week;
