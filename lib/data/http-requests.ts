import { Framework } from '../types';

export const httpRequestsItems: Framework[] = [
	{
		id: 'axios',
		name: 'Axios',
		description: 'Promise based HTTP client for the browser and node.js',
		url: 'https://axios-http.com/',
		githubUrl: 'https://github.com/axios/axios',
		tags: ['http', 'requests', 'promise'],
		category: 'http-requests',
	},
	{
		id: 'fetch',
		name: 'Fetch',
		description: 'Modern web API for making HTTP requests',
		url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API',
		githubUrl: 'https://github.com/github/fetch',
		tags: ['http', 'requests', 'web-api'],
		category: 'http-requests',
	},
	{
		id: 'got',
		name: 'Got',
		description: 'Human-friendly and powerful HTTP request library',
		url: 'https://github.com/sindresorhus/got',
		githubUrl: 'https://github.com/sindresorhus/got',
		tags: ['http', 'requests', 'node'],
		category: 'http-requests',
	},
	{
		id: 'node-fetch',
		name: 'node-fetch',
		description: 'A light-weight module that brings Fetch API to Node.js',
		url: 'https://github.com/node-fetch/node-fetch',
		githubUrl: 'https://github.com/node-fetch/node-fetch',
		tags: ['http', 'requests', 'node'],
		category: 'http-requests',
	},
	{
		id: 'superagent',
		name: 'Superagent',
		description: 'Client-side HTTP request library',
		url: 'https://visionmedia.github.io/superagent/',
		githubUrl: 'https://github.com/visionmedia/superagent',
		tags: ['http', 'requests', 'browser'],
		category: 'http-requests',
	},
];
