const SET_PERIOD = "SET_PERIOD";

export const setPeriod = period => ({ type: SET_PERIOD, period });

const periodReducer = (state = 0, action) => {
	switch (action.type) {
		case SET_PERIOD:
			return action.period;
		default:
			return state;
	}
};

export default periodReducer;
