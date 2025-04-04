import { Framework } from '../types';

export const generalFrameworks: Framework[] = [
	{
		id: 'lodash',
		name: 'Lodash',
		description:
			'A modern JavaScript utility library delivering modularity, performance & extras',
		url: 'https://lodash.com',
		githubUrl: 'https://github.com/lodash/lodash',
		logo: '',
		tags: ['utility', 'functional', 'performance'],
		category: 'general',
	},
	{
		id: 'underscore',
		name: 'Underscore.js',
		description: "JavaScript's utility _ belt",
		url: 'https://underscorejs.org',
		githubUrl: 'https://github.com/jashkenas/underscore',
		logo: '',
		tags: ['utility', 'functional', 'collection'],
		category: 'general',
	},
	{
		id: 'ramda',
		name: 'Ramda',
		description: 'A practical functional library for JavaScript programmers',
		url: 'https://ramdajs.com',
		githubUrl: 'https://github.com/ramda/ramda',
		logo: '',
		tags: ['utility', 'functional', 'immutable'],
		category: 'general',
	},
	{
		id: 'rxjs',
		name: 'RxJS',
		description: 'A reactive programming library for JavaScript',
		url: 'https://rxjs.dev',
		githubUrl: 'https://github.com/ReactiveX/rxjs',
		logo: '',
		tags: ['reactive', 'observables', 'async'],
		category: 'general',
	},
];
