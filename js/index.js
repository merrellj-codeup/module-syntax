import keys from "./keys.js";
import { getCoordinates, getForecast } from "./openweather.js";
import { createMap, addMarkerToMap } from "./mapbox.js";
import { formatToLocaleString } from "./utils.js";

//////// MAIN METHOD
(async () => {
	const map = createMap();
	addMarkerToMap([-98.59, 29.42], map);
	const easyPrice = formatToLocaleString(20);
	console.log(easyPrice);
})();

///////////////////
