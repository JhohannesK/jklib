import {
	Layers,
	Box,
	Play,
	Music,
	PaintBucket,
	BarChart,
	Palette,
	SlidersHorizontal,
	Layout,
	Database,
	Calendar,
	Zap,
	Code,
	Globe,
} from 'lucide-react';
import type { Category } from './types';
import { threedWebglItems } from './data/3d-webgl-frameworks';
import { allRounderItems } from './data/all-rounder';
import { animationsItems } from './data/animations';
import { audioItems } from './data/audio';
import { canvasItems } from './data/canvas';
import { chartItems } from './data/chart';
import { contentSliderItems } from './data/content-slider';
import { databaseStorageItems } from './data/database-storage';
import { datesItems } from './data/dates';
import { eventItems } from './data/events';
import { frontendFrameworkItems } from './data/frontend-frameworks';
import { generalItems } from './data/general';
import { cssUiFrameworkItems } from './data/css-ui-framework';

export const categories: Category[] = [
	{
		id: '3d-webgl-frameworks',
		name: '3D/WebGL Frameworks',
		icon: <Box className='h-5 w-5' />,
		items: threedWebglItems,
	},
	{
		id: 'allrounder',
		name: 'Allrounder (jQuery like)',
		icon: <Globe className='h-5 w-5' />,
		items: allRounderItems,
	},
	{
		id: 'animations',
		name: 'Animations',
		icon: <Play className='h-5 w-5' />,
		items: animationsItems,
	},
	{
		id: 'audio',
		name: 'Audio',
		icon: <Music className='h-5 w-5' />,
		items: audioItems,
	},
	{
		id: 'canvas-svg',
		name: 'Canvas and SVG',
		icon: <PaintBucket className='h-5 w-5' />,
		items: canvasItems,
	},
	{
		id: 'charts',
		name: 'Charts',
		icon: <BarChart className='h-5 w-5' />,
		items: chartItems,
	},
	{
		id: 'colors',
		name: 'Colors',
		icon: <Palette className='h-5 w-5' />,
		items: [
			{
				id: 'chroma',
				name: 'Chroma.js',
				description:
					'JavaScript library for all kinds of color manipulations',
				url: 'https://gka.github.io/chroma.js/',
				logo: '/placeholder.svg?height=32&width=32',
				tags: ['color', 'manipulation'],
				stars: 9000,
				forks: 600,
				category: 'colors',
			},
			{
				id: 'colorjs',
				name: 'Color.js',
				description:
					'A color manipulation library that works with a wide variety of color spaces',
				url: 'https://colorjs.io',
				logo: '/placeholder.svg?height=32&width=32',
				tags: ['color', 'manipulation'],
				stars: 1500,
				forks: 100,
				category: 'colors',
			},
			{
				id: 'tinycolor',
				name: 'TinyColor',
				description:
					'Fast, small color manipulation and conversion for JavaScript',
				url: 'https://github.com/bgrins/TinyColor',
				logo: '/placeholder.svg?height=32&width=32',
				tags: ['color', 'manipulation'],
				stars: 4000,
				forks: 500,
				category: 'colors',
			},
			{
				id: 'colord',
				name: 'colord',
				description:
					'A tiny yet powerful tool for high-performance color manipulations and conversions',
				url: 'https://github.com/omgovich/colord',
				logo: '/placeholder.svg?height=32&width=32',
				tags: ['color', 'manipulation'],
				stars: 3500,
				forks: 150,
				category: 'colors',
			},
		],
	},
	{
		id: 'content-slider',
		name: 'Content Slider/Carousels',
		icon: <SlidersHorizontal className='h-5 w-5' />,
		items: contentSliderItems,
	},
	{
		id: 'css-ui-frameworks',
		name: 'CSS/UI Frameworks',
		icon: <Layout className='h-5 w-5' />,
		items: cssUiFrameworkItems,
	},
	{
		id: 'databases-storage',
		name: 'Databases/Storage',
		icon: <Database className='h-5 w-5' />,
		items: databaseStorageItems,
	},
	{
		id: 'dates',
		name: 'Dates',
		icon: <Calendar className='h-5 w-5' />,
		items: datesItems,
	},
	{
		id: 'events',
		name: 'Events',
		icon: <Zap className='h-5 w-5' />,
		items: eventItems,
	},
	{
		id: 'frontend-frameworks',
		name: 'Frontend Frameworks/UI Component Libraries',
		icon: <Layers className='h-5 w-5' />,
		items: frontendFrameworkItems,
	},
	{
		id: 'general',
		name: 'General',
		icon: <Code className='h-5 w-5' />,
		items: generalItems,
	},
];
