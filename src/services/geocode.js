import axios from "axios";

const KEY = process.env.REACT_APP_GEOCODE_API_KEY;
const URL = "https://maps.googleapis.com/maps/api/geocode/json";

const getLocation = async latlng => {
	const result = await axios.get(URL, {
		params: { latlng, result_type: "locality", key: KEY }
	});
	return result.data;
};

const getCoords = async address => {
	const result = await axios.get(URL, {
		params: { address, result_type: "locality", key: KEY }
	});
	return result.data;
};

export default { getLocation, getCoords };
