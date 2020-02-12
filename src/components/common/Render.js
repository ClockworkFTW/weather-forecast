import React from "react";
import { connect } from "react-redux";

import Error from "./Error";
import Loader from "./Loader";

const Render = ({ pending, children, error }) => {
	if (error) {
		return <Error error={error} />;
	} else if (pending) {
		return <Loader />;
	} else {
		return children;
	}
};

const mapStateToProps = state => ({
	pending: state.forecast.pending,
	error: state.forecast.error
});

export default connect(mapStateToProps)(Render);
