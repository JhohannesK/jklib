'use client';

import { useState, useEffect } from 'react';
import { AdvancedFilter } from '@/components/advanced-filter';
import { Search } from '@/components/search';
import FrameworkCard from '@/components/framework-card';
import { Button } from '@/components/ui/button';
import type { Framework } from '@/lib/types';
import { featuredFrameworks } from '@/lib/data/featured-framework';
import { categories } from '@/lib/categories';

export default function SearchPage() {
	const [searchQuery, setSearchQuery] = useState('');
	const [activeFilters, setActiveFilters] = useState<any>({});
	const [filteredResults, setFilteredResults] = useState<Framework[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	// Get all frameworks from all categories
	const getAllFrameworks = (): Framework[] => {
		const allFrameworks = [...featuredFrameworks];

		categories.forEach((category) => {
			category.items.forEach((item) => {
				if (!allFrameworks.some((f) => f.id === item.id)) {
					allFrameworks.push(item);
				}
			});
		});

		return allFrameworks;
	};

	// Update results when filters or search query changes
	useEffect(() => {
		setIsLoading(true);

		// Simulate API call delay
		setTimeout(() => {
			const results = filterFrameworks(
				getAllFrameworks(),
				searchQuery,
				activeFilters
			);
			setFilteredResults(results);
			setIsLoading(false);
		}, 500);
	}, [searchQuery, activeFilters]);

	// Handle filter changes from AdvancedFilter component
	const handleFilterChange = (filters: any) => {
		setActiveFilters(filters);
	};

	// Handle search input changes
	const handleSearchChange = (query: string) => {
		setSearchQuery(query);
	};

	return (
		<div className='container max-w-6xl px-3 py-12 mx-auto'>
			<div className='space-y-8'>
				<div className='flex flex-col space-y-4'>
					<h1 className='text-3xl font-bold tracking-tight'>Search</h1>
					<div className='flex gap-2'>
						<div className='w-full max-w-xl'>
							<Search />
						</div>
					</div>
				</div>

				<AdvancedFilter onFilterChange={handleFilterChange} />

				<div className='space-y-4'>
					{isLoading ? (
						<div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
							{[...Array(8)].map((_, i) => (
								<div
									key={i}
									className='h-64 rounded-lg bg-muted/60 animate-pulse'
								></div>
							))}
						</div>
					) : (
						<>
							<div className='flex items-center justify-between'>
								<h2 className='text-xl font-semibold'>
									{filteredResults.length} results
								</h2>
								<Button variant='ghost' size='sm'>
									Compare Selected
								</Button>
							</div>

							{filteredResults.length > 0 ? (
								<div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
									{filteredResults.map((framework) => (
										<FrameworkCard
											key={framework.id}
											framework={framework}
										/>
									))}
								</div>
							) : (
								<div className='flex flex-col items-center justify-center py-12 text-center'>
									<p className='text-lg font-medium'>
										No results found
									</p>
									<p className='text-muted-foreground'>
										Try adjusting your search or filter criteria
									</p>
								</div>
							)}
						</>
					)}
				</div>
			</div>
		</div>
	);
}

// Filter frameworks based on search query and filters
function filterFrameworks(
	frameworks: Framework[],
	query: string,
	filters: any
): Framework[] {
	// Start with all frameworks
	let results = [...frameworks];

	// Filter by search query
	if (query) {
		const lowerQuery = query.toLowerCase();
		results = results.filter(
			(framework) =>
				framework.name.toLowerCase().includes(lowerQuery) ||
				framework.description.toLowerCase().includes(lowerQuery) ||
				framework.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
		);
	}

	// Apply category filters
	if (filters.categories && filters.categories.length > 0) {
		results = results.filter((framework) =>
			filters.categories.includes(framework.category)
		);
	}

	// Apply tag filters
	if (filters.tags && filters.tags.length > 0) {
		results = results.filter((framework) =>
			framework.tags.some((tag) => filters.tags.includes(tag))
		);
	}

	// Apply minimum stars filter
	if (filters.minStars && filters.minStars > 0) {
		results = results.filter(
			(framework) => (framework.stars || 0) >= filters.minStars
		);
	}

	return results;
}
