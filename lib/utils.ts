import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Framework } from './types';
import { featuredFrameworks } from './data/featured-framework';
import { categories } from './categories';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getAllFrameworks() {
	const allFrameworksMap = new Map<string, Framework>();

	featuredFrameworks.forEach((framework) => {
		allFrameworksMap.set(framework.id, framework);
	});

	categories.forEach((category) => {
		category.items.forEach((item) => {
			if (!allFrameworksMap.has(item.id)) {
				allFrameworksMap.set(item.id, item);
			}
		});
	});

	return Array.from(allFrameworksMap.values());
}

export function getSimilarFrameworks(framework: Framework, count = 3) {
	const allFrameworks = getAllFrameworks();
	const similarFrameworks = allFrameworks.filter(
		(f) =>
			f.id !== framework.id &&
			(f.category === framework.category ||
				f.tags.some((tag) => framework.tags.includes(tag)))
	);

	// Sort by relevance (number of matching tags)
	similarFrameworks.sort((a, b) => {
		const aMatches = a.tags.filter((tag) =>
			framework.tags.includes(tag)
		).length;
		const bMatches = b.tags.filter((tag) =>
			framework.tags.includes(tag)
		).length;
		return bMatches - aMatches;
	});

	return similarFrameworks.slice(0, count);
}
