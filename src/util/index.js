import darkskyServices from "../services/darksky";
import geocodeServices from "../services/geocode";

// Fetch forecast based on user location
export const fetchLocalForecast = async () => {
	const getPosition = () => {
		return new Promise((resolve, reject) => {
			navigator.geolocation.getCurrentPosition(resolve, reject);
		});
	};

	const position = await getPosition();
	const coords = `${position.coords.latitude},${position.coords.longitude}`;

	const location = await geocodeServices.getLocation(coords);
	const forecast = await darkskyServices.getForecast(coords);
	if (location.status === "OK") {
		return { ...forecast, location: location.results[0].formatted_address };
	} else {
		return { ...forecast, location: "location unknown" };
	}
};

// Fetch forecast base on search term
export const fetchSearchForecast = async term => {
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

// Set color based on time period
export const setPeriodColor = (time, sunrise, sunset) =>
	time > sunrise && time < sunset ? "" : "";
