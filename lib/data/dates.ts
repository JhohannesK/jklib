import { Framework } from '../types';

export const datesItems: Framework[] = [
	{
		id: 'dayjs',
		name: 'Day.js',
		description: 'Fast 2kB alternative to Moment.js with the same modern API',
		url: 'https://day.js.org',
		logo: '/placeholder.svg?height=32&width=32',
		tags: ['date', 'time'],
		stars: 41000,
		forks: 2000,
		category: 'dates',
	},
	{
		id: 'date-fns',
		name: 'date-fns',
		description: 'Modern JavaScript date utility library',
		url: 'https://date-fns.org',
		logo: '/placeholder.svg?height=32&width=32',
		tags: ['date', 'time', 'immutable'],
		stars: 30000,
		forks: 1500,
		category: 'dates',
	},
	{
		id: 'luxon',
		name: 'Luxon',
		description: 'A library for working with dates and times in JavaScript',
		url: 'https://moment.github.io/luxon/',
		logo: '/placeholder.svg?height=32&width=32',
		tags: ['date', 'time'],
		stars: 13000,
		forks: 700,
		category: 'dates',
	},
	{
		id: 'moment',
		name: 'Moment.js',
		description:
			'Parse, validate, manipulate, and display dates in javascript',
		url: 'https://momentjs.com',
		logo: '/placeholder.svg?height=32&width=32',
		tags: ['date', 'time'],
		stars: 46000,
		forks: 7000,
		category: 'dates',
	},
];
