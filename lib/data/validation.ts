import { Framework } from '../types';

export const validationItems: Framework[] = [
	{
		id: 'validator',
		name: 'Validator.js',
		description: 'String validation and sanitization',
		url: 'https://github.com/validatorjs/validator.js',
		githubUrl: 'https://github.com/validatorjs/validator.js',
		tags: ['validation', 'sanitization', 'strings'],
		category: 'validation',
	},
	{
		id: 'joi',
		name: 'Joi',
		description: 'Object schema validation',
		url: 'https://github.com/sideway/joi',
		githubUrl: 'https://github.com/sideway/joi',
		tags: ['validation', 'schema', 'objects'],
		category: 'validation',
	},
	{
		id: 'yup',
		name: 'Yup',
		description: 'Schema validation for forms',
		url: 'https://github.com/jquense/yup',
		githubUrl: 'https://github.com/jquense/yup',
		tags: ['validation', 'forms', 'schema'],
		category: 'validation',
	},
	{
		id: 'zod',
		name: 'Zod',
		description: 'TypeScript-first schema validation',
		url: 'https://zod.dev/',
		githubUrl: 'https://github.com/colinhacks/zod',
		tags: ['validation', 'typescript', 'schema'],
		category: 'validation',
	},
	{
		id: 'class-validator',
		name: 'class-validator',
		description: 'Decorator-based property validation',
		url: 'https://github.com/typestack/class-validator',
		githubUrl: 'https://github.com/typestack/class-validator',
		tags: ['validation', 'decorators', 'typescript'],
		category: 'validation',
	},
];
