import { Framework } from '../types';

export const audioFrameworks: Framework[] = [
	{
		id: 'howler',
		name: 'Howler.js',
		description: 'Modern audio library for the web',
		url: 'https://howlerjs.com',
		githubUrl: 'https://github.com/goldfire/howler.js',
		logo: '',
		tags: ['audio', 'web-audio', 'sound'],
		category: 'audio',
	},
	{
		id: 'tone',
		name: 'Tone.js',
		description:
			'A Web Audio framework for making interactive music in the browser',
		url: 'https://tonejs.github.io',
		githubUrl: 'https://github.com/Tonejs/Tone.js',
		logo: '',
		tags: ['audio', 'music', 'synthesis'],
		category: 'audio',
	},
	{
		id: 'wavesurfer',
		name: 'WaveSurfer.js',
		description:
			'Interactive navigable audio visualization using Web Audio and Canvas',
		url: 'https://wavesurfer-js.org',
		githubUrl: 'https://github.com/wavesurfer-js/wavesurfer.js',
		logo: '',
		tags: ['audio', 'visualization', 'waveform'],
		category: 'audio',
	},
	{
		id: 'soundjs',
		name: 'SoundJS',
		description:
			'A JavaScript library that provides a simple API for working with audio',
		url: 'https://createjs.com/soundjs',
		githubUrl: 'https://github.com/CreateJS/SoundJS',
		logo: '',
		tags: ['audio', 'createjs', 'sound'],
		category: 'audio',
	},
];
