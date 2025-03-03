import { Framework } from '../types';

export const databaseStorageItems: Framework[] = [
	{
		id: 'pouchdb',
		name: 'PouchDB',
		description: 'A pocket-sized database that runs in the browser',
		url: 'https://pouchdb.com',
		logo: '/placeholder.svg?height=32&width=32',
		tags: ['database', 'offline', 'sync'],
		stars: 15000,
		forks: 1400,
		category: 'databases-storage',
	},
	{
		id: 'dexie',
		name: 'Dexie.js',
		description: 'A Minimalistic Wrapper for IndexedDB',
		url: 'https://dexie.org',
		logo: '/placeholder.svg?height=32&width=32',
		tags: ['database', 'indexeddb'],
		stars: 8500,
		forks: 600,
		category: 'databases-storage',
	},
	{
		id: 'localforage',
		name: 'localForage',
		description:
			'Offline storage, improved. Wraps IndexedDB, WebSQL, or localStorage',
		url: 'https://localforage.github.io/localForage/',
		logo: '/placeholder.svg?height=32&width=32',
		tags: ['storage', 'offline'],
		stars: 21000,
		forks: 1200,
		category: 'databases-storage',
	},
	{
		id: 'rxdb',
		name: 'RxDB',
		description: 'A realtime Database for JavaScript Applications',
		url: 'https://rxdb.info',
		logo: '/placeholder.svg?height=32&width=32',
		tags: ['database', 'realtime', 'offline'],
		stars: 18000,
		forks: 900,
		category: 'databases-storage',
	},
];
