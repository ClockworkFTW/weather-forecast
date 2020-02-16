import { fetchLocalForecast, fetchSearchForecast } from "../util";

const FETCH_FORECAST_PENDING = "FETCH_FORECAST_PENDING";
const FETCH_FORECAST_SUCCESS = "FETCH_FORECAST_SUCCESS";
const FETCH_FORECAST_ERROR = "FETCH_FORECAST_ERROR";

const fetchForecastPending = () => ({
	type: FETCH_FORECAST_PENDING
});
const fetchForecastSuccess = data => ({
	type: FETCH_FORECAST_SUCCESS,
	data
});
const fetchForecastError = error => ({
	type: FETCH_FORECAST_ERROR,
	error
});

export const fetchForecast = term => {
	return async dispatch => {
		dispatch(fetchForecastPending());
		try {
			let data;
			if (term) {
				data = await fetchSearchForecast(term);
			} else {
				data = await fetchLocalForecast();
			}
			dispatch(fetchForecastSuccess(data));
		} catch (error) {
			dispatch(fetchForecastError(error));
		}
	};
};

const INITIAL_STATE = { pending: false, data: null, error: null };

const forecastReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FETCH_FORECAST_PENDING:
			return { ...state, pending: true };
		case FETCH_FORECAST_SUCCESS:
			return { ...state, pending: false, data: action.data };
		case FETCH_FORECAST_ERROR:
			return { ...state, pending: false, error: action.error };
		default:
			return state;
	}
};

export default forecastReducer;
