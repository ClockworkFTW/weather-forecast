import darkskyServices from "../services/darksky";
import geocodeServices from "../services/geocode";

// Fetch forecast based on user location
export const fetchLocalData = async () => {
	const getPosition = () => {
		return new Promise((resolve, reject) => {
			navigator.geolocation.getCurrentPosition(resolve, reject);
		});
	};

	const position = await getPosition();
	const coords = `${position.coords.latitude},${position.coords.longitude}`;

	let location = await geocodeServices.getLocation(coords);
	if (location.status === "OK") {
		location = location.results[0].formatted_address;
		const forecast = await darkskyServices.getForecast(coords);
		return { ...forecast, location };
	} else {
		throw new Error("location not found");
	}
};

// Fetch forecast base on search term
export const fetchSearchData = async term => {
	const position = await geocodeServices.getCoords(term);

	if (position.status === "OK") {
		const result = position.results[0];

		const { lat, lng } = result.geometry.location;

		const coords = `${lat},${lng}`;
		const location = result.formatted_address;
		const forecast = await darkskyServices.getForecast(coords);

		return { ...forecast, location };
	} else {
		throw new Error("location not found");
	}
};
