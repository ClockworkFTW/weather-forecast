import axios from "axios";

const KEY = "36ed962eb4a6c23a1fd3725b1f64983f";
const CORS = "https://cors-anywhere.herokuapp.com/";
const URL = "https://api.darksky.net/forecast/";

const getForecast = async location => {
	const result = await axios.get(`${CORS}${URL}${KEY}/${location}`);
	return result.data;
};

export default { getForecast };
