import { Framework } from '../types';

export const frontendFrameworks: Framework[] = [
	{
		id: 'react',
		name: 'React',
		description: 'A JavaScript library for building user interfaces',
		url: 'https://reactjs.org',
		githubUrl: 'https://github.com/facebook/react',
		logo: '',
		tags: ['ui', 'components', 'virtual-dom'],
		category: 'frontend-frameworks',
	},
	{
		id: 'vue',
		name: 'Vue.js',
		description: 'The Progressive JavaScript Framework',
		url: 'https://vuejs.org',
		githubUrl: 'https://github.com/vuejs/core',
		logo: '',
		tags: ['ui', 'components', 'reactive'],
		category: 'frontend-frameworks',
	},
	{
		id: 'svelte',
		name: 'Svelte',
		description: 'Cybernetically enhanced web apps',
		url: 'https://svelte.dev',
		githubUrl: 'https://github.com/sveltejs/svelte',
		logo: '',
		tags: ['ui', 'components', 'compiler'],
		category: 'frontend-frameworks',
	},
	{
		id: 'angular',
		name: 'Angular',
		description: 'One framework. Mobile & desktop.',
		url: 'https://angular.io',
		githubUrl: 'https://github.com/angular/angular',
		logo: '',
		tags: ['ui', 'components', 'typescript'],
		category: 'frontend-frameworks',
	},
];
