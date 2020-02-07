import axios from "axios";

const KEY = "AIzaSyA2HVmCDtmeYhg9jgLRUtYEb40rfXiyu4w";
const URL = "https://maps.googleapis.com/maps/api/geocode/json";

const getLocation = async latlng => {
	const result = await axios.get(URL, {
		params: { latlng, result_type: "locality", key: KEY }
	});

	if (result.data.status === "OK") {
		return result.data.results[0].formatted_address;
	} else {
		return "Address not found";
	}
};

const getCoords = async address => {
	const result = await axios.get(URL, {
		params: { address, key: KEY }
	});
	return result.data;
};

export default { getLocation, getCoords };
