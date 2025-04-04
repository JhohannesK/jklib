import { Framework } from '../types';

export const databaseStorageFrameworks: Framework[] = [
	{
		id: 'dexie',
		name: 'Dexie.js',
		description: 'A Minimalistic Wrapper for IndexedDB',
		url: 'https://dexie.org',
		githubUrl: 'https://github.com/dexie/Dexie.js',
		logo: '',
		tags: ['database', 'indexeddb', 'storage'],
		category: 'databases-storage',
	},
	{
		id: 'idb',
		name: 'idb',
		description:
			'A tiny (~1.15kB) library that mostly mirrors the IndexedDB API',
		url: 'https://github.com/jakearchibald/idb',
		githubUrl: 'https://github.com/jakearchibald/idb',
		logo: '',
		tags: ['database', 'indexeddb', 'storage'],
		category: 'databases-storage',
	},
	{
		id: 'localforage',
		name: 'localForage',
		description: 'Offline storage, improved',
		url: 'https://localforage.github.io/localForage',
		githubUrl: 'https://github.com/localForage/localForage',
		logo: '',
		tags: ['database', 'storage', 'offline'],
		category: 'databases-storage',
	},
	{
		id: 'pouchdb',
		name: 'PouchDB',
		description: 'PouchDB is a pocket-sized database',
		url: 'https://pouchdb.com',
		githubUrl: 'https://github.com/pouchdb/pouchdb',
		logo: '',
		tags: ['database', 'couchdb', 'offline'],
		category: 'databases-storage',
	},
];
