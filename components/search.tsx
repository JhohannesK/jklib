'use client';

import { useState, useEffect } from 'react';
import { SearchIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from '@/components/ui/command';
import { useRouter } from 'next/navigation';
import type { Framework } from '@/lib/types';
import { featuredFrameworks } from '@/lib/data/featured-framework';
import { categories } from '@/lib/categories';

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

export function Search() {
	const [open, setOpen] = useState(false);
	const [query, setQuery] = useState('');
	const router = useRouter();
	const frameworks = getAllFrameworks();

	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setOpen((open) => !open);
			}
		};
		document.addEventListener('keydown', down);
		return () => document.removeEventListener('keydown', down);
	}, []);

	const filteredFrameworks =
		query === ''
			? []
			: frameworks.filter((framework) => {
					return (
						framework.name.toLowerCase().includes(query.toLowerCase()) ||
						framework.description
							.toLowerCase()
							.includes(query.toLowerCase()) ||
						framework.tags.some((tag) =>
							tag.toLowerCase().includes(query.toLowerCase())
						)
					);
			  });

	const onSelect = (id: string) => {
		setOpen(false);
		router.push(`/framework/${id}`);
	};

	return (
		<>
			<Button
				variant='outline'
				className='relative h-10 w-full justify-start rounded-full bg-background text-sm font-normal text-muted-foreground shadow-none sm:w-[300px] md:w-[300px] lg:w-[350px]'
				onClick={() => setOpen(true)}
			>
				<SearchIcon className='w-4 h-4 mr-2' />
				<span>Search frameworks and tools...</span>
				<kbd className='pointer-events-none absolute right-2 top-2 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-xs opacity-100 sm:flex'>
					<span className='text-xs'>⌘</span>K
				</kbd>
			</Button>
			<CommandDialog open={open} onOpenChange={setOpen}>
				<CommandInput
					placeholder='Search frameworks, libraries, tools...'
					value={query}
					onValueChange={setQuery}
				/>
				<CommandList>
					<CommandEmpty>No results found.</CommandEmpty>
					<CommandGroup heading='Frameworks and Tools'>
						{filteredFrameworks.slice(0, 10).map((framework) => (
							<CommandItem
								key={framework.id}
								onSelect={() => onSelect(framework.id)}
							>
								<div className='flex items-center'>
									{framework.logo ? (
										<img
											src={framework.logo || '/placeholder.svg'}
											alt={framework.name}
											className='w-6 h-6 mr-2 rounded-md'
										/>
									) : (
										<div className='flex items-center justify-center w-6 h-6 mr-2 rounded-md bg-primary/10'>
											{framework.name.charAt(0)}
										</div>
									)}
									<span>{framework.name}</span>
								</div>
							</CommandItem>
						))}
					</CommandGroup>
				</CommandList>
			</CommandDialog>
		</>
	);
}
