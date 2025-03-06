import type { ReactNode } from 'react';

export interface Framework {
	id: string;
	name: string;
	description: string;
	url: string;
	logo?: string;
	tags: string[];
	stars?: number;
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
		| 'component-lib';
}

export interface Category {
	id: string;
	name: string;
	icon: ReactNode;
	items: Framework[];
}
