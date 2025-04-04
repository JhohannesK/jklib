import { Framework } from '../types';

export const moduleLoadersItems: Framework[] = [
	{
		id: 'requirejs',
		name: 'RequireJS',
		description: 'JavaScript file and module loader',
		url: 'https://requirejs.org/',
		githubUrl: 'https://github.com/requirejs/requirejs',
		tags: ['modules', 'amd', 'loader'],
		category: 'module-loaders',
	},
	{
		id: 'systemjs',
		name: 'SystemJS',
		description: 'Dynamic module loader',
		url: 'https://github.com/systemjs/systemjs',
		githubUrl: 'https://github.com/systemjs/systemjs',
		tags: ['modules', 'es6', 'loader'],
		category: 'module-loaders',
	},
	{
		id: 'webpack',
		name: 'Webpack',
		description: 'Module bundler',
		url: 'https://webpack.js.org/',
		githubUrl: 'https://github.com/webpack/webpack',
		tags: ['bundler', 'modules', 'build'],
		category: 'module-loaders',
	},
	{
		id: 'rollup',
		name: 'Rollup',
		description: 'Module bundler for JavaScript',
		url: 'https://rollupjs.org/',
		githubUrl: 'https://github.com/rollup/rollup',
		tags: ['bundler', 'modules', 'es6'],
		category: 'module-loaders',
	},
	{
		id: 'parcel',
		name: 'Parcel',
		description: 'Zero configuration web application bundler',
		url: 'https://parceljs.org/',
		githubUrl: 'https://github.com/parcel-bundler/parcel',
		tags: ['bundler', 'modules', 'zero-config'],
		category: 'module-loaders',
	},
];
