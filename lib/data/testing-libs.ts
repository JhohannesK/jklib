import { Framework } from '../types';

export const testingFrameworks: Framework[] = [
	{
		id: 'jest',
		name: 'Jest',
		description: 'Delightful JavaScript Testing',
		url: 'https://jestjs.io',
		githubUrl: 'https://github.com/facebook/jest',
		logo: '',
		tags: ['testing', 'javascript', 'node'],
		category: 'testing',
	},
	{
		id: 'vitest',
		name: 'Vitest',
		description: 'A Vite-native unit test framework',
		url: 'https://vitest.dev',
		githubUrl: 'https://github.com/vitest-dev/vitest',
		logo: '',
		tags: ['testing', 'vite', 'typescript'],
		category: 'testing',
	},
	{
		id: 'cypress',
		name: 'Cypress',
		description:
			'Fast, easy and reliable testing for anything that runs in a browser',
		url: 'https://www.cypress.io',
		githubUrl: 'https://github.com/cypress-io/cypress',
		logo: '',
		tags: ['testing', 'browser', 'e2e'],
		category: 'testing',
	},
	{
		id: 'playwright',
		name: 'Playwright',
		description: 'Fast and reliable end-to-end testing for modern web apps',
		url: 'https://playwright.dev',
		githubUrl: 'https://github.com/microsoft/playwright',
		logo: '',
		tags: ['testing', 'browser', 'e2e'],
		category: 'testing',
	},
];
