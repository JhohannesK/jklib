import { Framework } from '../types';

export const templatingItems: Framework[] = [
	{
		id: 'handlebars',
		name: 'Handlebars',
		description: 'Template engine for JavaScript',
		url: 'http://handlebarsjs.com/',
		githubUrl: 'https://github.com/handlebars-lang/handlebars.js',
		tags: ['templating', 'mustache', 'html'],
		category: 'templating',
	},
	{
		id: 'mustache',
		name: 'Mustache',
		description: 'Logic-less template engine',
		url: 'https://mustache.github.io/',
		githubUrl: 'https://github.com/janl/mustache.js',
		tags: ['templating', 'logic-less', 'html'],
		category: 'templating',
	},
	{
		id: 'nunjucks',
		name: 'Nunjucks',
		description: 'A rich and powerful templating language for JavaScript',
		url: 'https://mozilla.github.io/nunjucks/',
		githubUrl: 'https://github.com/mozilla/nunjucks',
		tags: ['templating', 'jinja2', 'html'],
		category: 'templating',
	},
	{
		id: 'ejs',
		name: 'EJS',
		description: 'Embedded JavaScript templates',
		url: 'https://ejs.co/',
		githubUrl: 'https://github.com/mde/ejs',
		tags: ['templating', 'javascript', 'html'],
		category: 'templating',
	},
	{
		id: 'pug',
		name: 'Pug',
		description: 'Robust, elegant, feature rich template engine',
		url: 'https://pugjs.org/',
		githubUrl: 'https://github.com/pugjs/pug',
		tags: ['templating', 'html', 'node'],
		category: 'templating',
	},
];
