import keys from "./keys.js";

const createMap = () => {
	mapboxgl.accessToken = keys.mapbox;
	const map = new mapboxgl.Map({
		container: "map", // container ID
		// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
		style: "mapbox://styles/mapbox/navigation-night-v1", // style URL
		center: [-98.59, 29.42], // starting position [lng, lat]
		zoom: 10, // starting zoom
	});
	return map;
};

const addMarkerToMap = (coordinates, map) => {
	const marker = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
};

export { createMap, addMarkerToMap };
