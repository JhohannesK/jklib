import { Framework } from '../types';

export const mapsItems: Framework[] = [
	{
		id: 'cesium',
		name: 'Cesium',
		description:
			'Library for creating 3D globes and 2D maps in a web browser without a plugin',
		url: 'http://cesiumjs.org/',
		githubUrl: 'https://github.com/CesiumGS/cesium',
		tags: ['maps', '3d', 'globe'],
		category: 'maps',
	},
	{
		id: 'harp-gl',
		name: 'harp.gl',
		description: 'Web map rendering engine',
		url: 'https://github.com/heremaps/harp.gl',
		githubUrl: 'https://github.com/heremaps/harp.gl',
		tags: ['maps', 'rendering', 'webgl'],
		category: 'maps',
	},
	{
		id: 'kartograph',
		name: 'Kartograph',
		description:
			'Simple and lightweight framework for building interactive map applications without Google Maps',
		url: 'http://kartograph.org/',
		githubUrl: 'https://github.com/kartograph/kartograph.js',
		tags: ['maps', 'interactive', 'svg'],
		category: 'maps',
	},
	{
		id: 'leaflet',
		name: 'Leaflet',
		description: 'Library for Mobile-Friendly Interactive Maps',
		url: 'http://leafletjs.com/',
		githubUrl: 'https://github.com/Leaflet/Leaflet',
		tags: ['maps', 'mobile', 'interactive'],
		category: 'maps',
	},
	{
		id: 'mapbox-gl-js',
		name: 'Mapbox GL JS',
		description: 'Interactive WebGL maps from vector tiles',
		url: 'https://www.mapbox.com/mapbox-gl-js/',
		githubUrl: 'https://github.com/mapbox/mapbox-gl-js',
		tags: ['maps', 'webgl', 'vector'],
		category: 'maps',
	},
	{
		id: 'openlayers',
		name: 'OpenLayers',
		description: 'Mapping library that supports different projections',
		url: 'http://openlayers.org/',
		githubUrl: 'https://github.com/openlayers/openlayers',
		tags: ['maps', 'projections', 'interactive'],
		category: 'maps',
	},
	{
		id: 'turf',
		name: 'Turf',
		description: 'A modular geospatial engine',
		url: 'http://turfjs.org/',
		githubUrl: 'https://github.com/Turfjs/turf',
		tags: ['maps', 'geospatial', 'analysis'],
		category: 'maps',
	},
];
