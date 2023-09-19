import keys from "./keys.js";

const getCoordinates = (query) => {
	//url encode search term
	const encodedSearchTerm = encodeURIComponent(query);

	// Make fetch to Mapbox API
	// only get cities
	// only relevance of .75 or higher
	const searchParams = new URLSearchParams({
		access_token: mapboxgl.accessToken,
		autocomplete: true,
		limit: 10,
		types: "place",
		fuzzyMatch: true,
		language: "en",
		country: "us",
		proximity: "-98.59,29.42",
	});
	const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedSearchTerm}.json?${searchParams}`;
	return fetch(url)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			return data;
		});
};

const getForecast = (lat, lon) => {
	const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${keys.weathermap}&units=imperial`;
	return fetch(url)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			return data;
		});
};

export { getCoordinates, getForecast };
