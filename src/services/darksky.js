import axios from "axios";

const KEY = process.env.REACT_APP_WEATHER_API_KEY;
const CORS = "https://cors-anywhere.herokuapp.com/";
const URL = "https://api.darksky.net/forecast/";

const getForecast = async location => {
	const result = await axios.get(`${CORS}${URL}${KEY}/${location}`);
	return result.data;
};

export default { getForecast };
