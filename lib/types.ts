import type { ReactNode } from 'react';

export interface Framework {
	id: string;
	name: string;
	description: string;
	url: string;
	logo?: string;
	tags: string[];
	githubUrl?: string;
	forks?: number;
	category:
		| '3d-webgl-frameworks'
		| 'allrounder'
		| 'animations'
		| 'audio'
		| 'canvas-svg'
		| 'charts'
		| 'colors'
		| 'content-slider'
		| 'css-ui-frameworks'
		| 'databases-storage'
		| 'dates'
		| 'events'
		| 'frontend-frameworks'
		| 'general'
		| 'component-lib'
		| 'maps'
		| 'testing'
		| 'tables-spreadsheets'
		| 'selects'
		| 'loaders'
		| 'ui-elements'
		| 'typography-text'
		| 'video'
		| 'image-processing'
		| 'scrolling'
		| 'touch-gestures'
		| 'templating'
		| 'http-requests'
		| 'icons'
		| 'validation'
		| 'internationalization'
		| 'numbers-currencies'
		| 'statistics-data-analysis'
		| 'module-loaders'
		| 'lazy-loading'
		| 'neural-networks'
		| 'social'
		| 'utility-libraries';
}

export interface Category {
	id: string;
	name: string;
	icon: ReactNode;
	items: Framework[];
}
