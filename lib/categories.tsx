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
import { colorItems } from './data/colors';

export const categories: Category[] = [
	{
		id: 'css-ui-frameworks',
		name: 'CSS/UI Frameworks',
		icon: <Layout className='h-5 w-5' />,
		items: cssUiFrameworkItems,
	},
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
		items: colorItems,
	},
	{
		id: 'content-slider',
		name: 'Content Slider/Carousels',
		icon: <SlidersHorizontal className='h-5 w-5' />,
		items: contentSliderItems,
	},
	{
		id: 'animations',
		name: 'Animations',
		icon: <Play className='h-5 w-5' />,
		items: animationsItems,
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
