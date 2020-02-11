import { combineReducers } from "redux";

import forecastReducer from "./forecast";
import periodReducer from "./period";

const rootReducer = combineReducers({
	forecast: forecastReducer,
	period: periodReducer
});

export default rootReducer;
