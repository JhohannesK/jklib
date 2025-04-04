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
	Map,
	Table,
	CheckSquare2,
	Loader,
	Square,
	Type,
	Video,
	Image,
	Scroll,
	Hand,
	FileText,
	Globe2,
	Coins,
	LineChart,
	Package,
	Timer,
	Brain,
	Share2,
	Wrench,
} from 'lucide-react';
import type { Category } from './types';
import { threedWebglItems } from './data/3d-webgl-frameworks';
import { allRounderItems } from './data/all-rounder';
import { animationsItems } from './data/animations';
import { chartItems } from './data/chart';
import { cssUiFrameworkItems } from './data/css-ui-framework';
import { componentlibItems } from './data/component-libraries';
import { audioFrameworks } from './data/audio';
import { canvasFrameworks } from './data/canvas';
import { colorFrameworks } from './data/colors';
import { contentSliderFrameworks } from './data/content-slider';
import { databaseStorageFrameworks } from './data/database-storage';
import { dateFrameworks } from './data/dates';
import { eventFrameworks } from './data/events';
import { frontendFrameworks } from './data/frontend-frameworks';
import { generalFrameworks } from './data/general';
import { mapsItems } from './data/maps';
import { tablesSpreadsheetsItems } from './data/tables-spreadsheets';
import { selectsItems } from './data/selects';
import { loadersItems } from './data/loaders';
import { uiElementsItems } from './data/ui-elements';
import { typographyTextItems } from './data/typography-text';
import { videoItems } from './data/video';
import { imageProcessingItems } from './data/image-processing';
import { scrollingItems } from './data/scrolling';
import { touchGesturesItems } from './data/touch-gestures';
import { templatingItems } from './data/templating';
import { httpRequestsItems } from './data/http-requests';
import { iconsItems } from './data/icons';
import { validationItems } from './data/validation';
import { internationalizationItems } from './data/internationalization';
import { numbersCurrenciesItems } from './data/numbers-currencies';
import { statisticsDataAnalysisItems } from './data/statistics-data-analysis';
import { moduleLoadersItems } from './data/module-loaders';
import { lazyLoadingItems } from './data/lazy-loading';
import { neuralNetworksItems } from './data/neural-networks';
import { socialItems } from './data/social';
import { utilityLibrariesItems } from './data/utility-libraries';

export const categories: Category[] = [
	{
		id: 'component-lib',
		name: 'Component Libraries',
		icon: <Layout className='h-5 w-5' />,
		items: componentlibItems,
	},
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
		id: 'animations',
		name: 'Animations',
		icon: <Play className='h-5 w-5' />,
		items: animationsItems,
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
		items: audioFrameworks,
	},
	{
		id: 'canvas-svg',
		name: 'Canvas and SVG',
		icon: <PaintBucket className='h-5 w-5' />,
		items: canvasFrameworks,
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
		items: colorFrameworks,
	},
	{
		id: 'content-slider',
		name: 'Content Slider/Carousels',
		icon: <SlidersHorizontal className='h-5 w-5' />,
		items: contentSliderFrameworks,
	},
	{
		id: 'databases-storage',
		name: 'Databases/Storage',
		icon: <Database className='h-5 w-5' />,
		items: databaseStorageFrameworks,
	},
	{
		id: 'dates',
		name: 'Dates',
		icon: <Calendar className='h-5 w-5' />,
		items: dateFrameworks,
	},
	{
		id: 'events',
		name: 'Events',
		icon: <Zap className='h-5 w-5' />,
		items: eventFrameworks,
	},
	{
		id: 'frontend-frameworks',
		name: 'Frontend Frameworks/UI Component Libraries',
		icon: <Layers className='h-5 w-5' />,
		items: frontendFrameworks,
	},
	{
		id: 'general',
		name: 'General',
		icon: <Code className='h-5 w-5' />,
		items: generalFrameworks,
	},
	{
		id: 'maps',
		name: 'Maps',
		icon: <Map className='h-5 w-5' />,
		items: mapsItems,
	},
	{
		id: 'tables-spreadsheets',
		name: 'Tables/Spreadsheets',
		icon: <Table className='h-5 w-5' />,
		items: tablesSpreadsheetsItems,
	},
	{
		id: 'selects',
		name: 'Selects',
		icon: <CheckSquare2 className='h-5 w-5' />,
		items: selectsItems,
	},
	{
		id: 'loaders',
		name: 'Loaders',
		icon: <Loader className='h-5 w-5' />,
		items: loadersItems,
	},
	{
		id: 'ui-elements',
		name: 'UI Elements',
		icon: <Square className='h-5 w-5' />,
		items: uiElementsItems,
	},
	{
		id: 'typography-text',
		name: 'Typography/Text',
		icon: <Type className='h-5 w-5' />,
		items: typographyTextItems,
	},
	{
		id: 'video',
		name: 'Video',
		icon: <Video className='h-5 w-5' />,
		items: videoItems,
	},
	{
		id: 'image-processing',
		name: 'Image Processing',
		icon: <Image className='h-5 w-5' />,
		items: imageProcessingItems,
	},
	{
		id: 'scrolling',
		name: 'Scrolling',
		icon: <Scroll className='h-5 w-5' />,
		items: scrollingItems,
	},
	{
		id: 'touch-gestures',
		name: 'Touch Gestures',
		icon: <Hand className='h-5 w-5' />,
		items: touchGesturesItems,
	},
	{
		id: 'templating',
		name: 'Templating',
		icon: <FileText className='h-5 w-5' />,
		items: templatingItems,
	},
	{
		id: 'http-requests',
		name: 'HTTP Requests',
		icon: <Globe2 className='h-5 w-5' />,
		items: httpRequestsItems,
	},
	{
		id: 'icons',
		name: 'Icons',
		icon: <Square className='h-5 w-5' />,
		items: iconsItems,
	},
	{
		id: 'validation',
		name: 'Validation',
		icon: <CheckSquare2 className='h-5 w-5' />,
		items: validationItems,
	},
	{
		id: 'internationalization',
		name: 'Internationalization',
		icon: <Globe2 className='h-5 w-5' />,
		items: internationalizationItems,
	},
	{
		id: 'numbers-currencies',
		name: 'Numbers/Currencies',
		icon: <Coins className='h-5 w-5' />,
		items: numbersCurrenciesItems,
	},
	{
		id: 'statistics-data-analysis',
		name: 'Statistics/Data Analysis',
		icon: <LineChart className='h-5 w-5' />,
		items: statisticsDataAnalysisItems,
	},
	{
		id: 'module-loaders',
		name: 'Module Loaders',
		icon: <Package className='h-5 w-5' />,
		items: moduleLoadersItems,
	},
	{
		id: 'lazy-loading',
		name: 'Lazy Loading',
		icon: <Timer className='h-5 w-5' />,
		items: lazyLoadingItems,
	},
	{
		id: 'neural-networks',
		name: 'Neural Networks',
		icon: <Brain className='h-5 w-5' />,
		items: neuralNetworksItems,
	},
	{
		id: 'social',
		name: 'Social',
		icon: <Share2 className='h-5 w-5' />,
		items: socialItems,
	},
	{
		id: 'utility-libraries',
		name: 'Utility Libraries',
		icon: <Wrench className='h-5 w-5' />,
		items: utilityLibrariesItems,
	},
];
