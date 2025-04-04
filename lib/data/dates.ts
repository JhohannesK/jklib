import { Framework } from '../types';

export const dateFrameworks: Framework[] = [
	{
		id: 'date-fns',
		name: 'date-fns',
		description: 'Modern JavaScript date utility library',
		url: 'https://date-fns.org',
		githubUrl: 'https://github.com/date-fns/date-fns',
		logo: '',
		tags: ['dates', 'time', 'manipulation'],
		category: 'dates',
	},
	{
		id: 'moment',
		name: 'Moment.js',
		description:
			'Parse, validate, manipulate, and display dates and times in JavaScript',
		url: 'https://momentjs.com',
		githubUrl: 'https://github.com/moment/moment',
		logo: '',
		tags: ['dates', 'time', 'manipulation'],
		category: 'dates',
	},
	{
		id: 'dayjs',
		name: 'Day.js',
		description: 'Fast 2kB alternative to Moment.js with the same modern API',
		url: 'https://day.js.org',
		githubUrl: 'https://github.com/iamkun/dayjs',
		logo: '',
		tags: ['dates', 'time', 'lightweight'],
		category: 'dates',
	},
	{
		id: 'luxon',
		name: 'Luxon',
		description:
			'A powerful, modern, and friendly wrapper for JavaScript dates and times',
		url: 'https://moment.github.io/luxon',
		githubUrl: 'https://github.com/moment/luxon',
		logo: '',
		tags: ['dates', 'time', 'immutable'],
		category: 'dates',
	},
];
