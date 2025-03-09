'use client';

import { useState } from 'react';
import {
	Check,
	ChevronDown,
	Filter,
	LayoutGrid,
	SlidersHorizontal,
	Star,
	X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { categories } from '@/lib/categories';

interface FilterOption {
	id: string;
	label: string;
	checked: boolean;
}

interface FilterProps {
	onFilterChange: (filters: any) => void;
}

export function AdvancedFilter({ onFilterChange }: FilterProps) {
	// Categories filter
	const [categoryOptions, setCategoryOptions] = useState<FilterOption[]>(
		categories.map((category) => ({
			id: category.id,
			label: category.name,
			checked: false,
		}))
	);

	// Tags filter
	const [tagOptions, setTagOptions] = useState<FilterOption[]>([
		{ id: 'framework', label: 'Framework', checked: false },
		{ id: 'ui', label: 'UI', checked: false },
		{ id: 'javascript', label: 'JavaScript', checked: false },
		{ id: 'typescript', label: 'TypeScript', checked: false },
		{ id: 'css', label: 'CSS', checked: false },
		{ id: 'animation', label: 'Animation', checked: false },
		{ id: 'state-management', label: 'State Management', checked: false },
		{ id: 'utilities', label: 'Utilities', checked: false },
	]);

	// Star rating filter
	const [minStars, setMinStars] = useState(0);

	// Last updated filter
	const [lastUpdated, setLastUpdated] = useState('any');

	// Maintenance status
	const [maintenance, setMaintenance] = useState('any');

	// Features
	const [features, setFeatures] = useState({
		typescript: false,
		ssr: false,
		treeshaking: false,
		testing: false,
	});

	// Active filters count
	const activeFilterCount =
		categoryOptions.filter((o) => o.checked).length +
		tagOptions.filter((o) => o.checked).length +
		(minStars > 0 ? 1 : 0) +
		(lastUpdated !== 'any' ? 1 : 0) +
		(maintenance !== 'any' ? 1 : 0) +
		Object.values(features).filter(Boolean).length;

	// Toggle category filter
	const toggleCategory = (id: string) => {
		setCategoryOptions((prev) =>
			prev.map((option) =>
				option.id === id ? { ...option, checked: !option.checked } : option
			)
		);

		updateFilters();
	};

	// Toggle tag filter
	const toggleTag = (id: string) => {
		setTagOptions((prev) =>
			prev.map((option) =>
				option.id === id ? { ...option, checked: !option.checked } : option
			)
		);

		updateFilters();
	};

	// Update filters and notify parent
	const updateFilters = () => {
		const filters = {
			categories: categoryOptions.filter((o) => o.checked).map((o) => o.id),
			tags: tagOptions.filter((o) => o.checked).map((o) => o.id),
			minStars,
			lastUpdated,
			maintenance,
			features,
		};

		onFilterChange(filters);
	};

	// Clear all filters
	const clearFilters = () => {
		setCategoryOptions((prev) =>
			prev.map((option) => ({ ...option, checked: false }))
		);
		setTagOptions((prev) =>
			prev.map((option) => ({ ...option, checked: false }))
		);
		setMinStars(0);
		setLastUpdated('any');
		setMaintenance('any');
		setFeatures({
			typescript: false,
			ssr: false,
			treeshaking: false,
			testing: false,
		});

		onFilterChange({});
	};

	return (
		<div className='flex flex-col gap-4'>
			<div className='flex flex-wrap items-center gap-2'>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant='outline' size='sm' className='h-8 gap-1'>
							<SlidersHorizontal className='h-3.5 w-3.5' />
							<span>Sort</span>
							<ChevronDown className='h-3.5 w-3.5' />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align='start' className='w-48'>
						<DropdownMenuLabel>Sort By</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuItem>
								<Star className='w-4 h-4 mr-2' />
								Stars
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Check className='w-4 h-4 mr-2' />
								Recently Updated
							</DropdownMenuItem>
							<DropdownMenuItem>
								<LayoutGrid className='w-4 h-4 mr-2' />
								Name (A-Z)
							</DropdownMenuItem>
						</DropdownMenuGroup>
					</DropdownMenuContent>
				</DropdownMenu>

				<Sheet>
					<SheetTrigger asChild>
						<Button variant='outline' size='sm' className='h-8 gap-1'>
							<Filter className='h-3.5 w-3.5' />
							<span>Filter</span>
							{activeFilterCount > 0 && (
								<Badge className='w-5 h-5 p-0 ml-1 text-xs rounded-full'>
									{activeFilterCount}
								</Badge>
							)}
						</Button>
					</SheetTrigger>
					<SheetContent side='right' className='w-full p-3 sm:max-w-md'>
						<SheetHeader className='px-1'>
							<SheetTitle>Filters</SheetTitle>
							<SheetDescription>
								Refine your search with multiple filters
							</SheetDescription>
						</SheetHeader>

						<div className='grid gap-6 py-6'>
							<div className='space-y-4'>
								<h3 className='text-sm font-medium'>Categories</h3>
								<div className='grid grid-cols-2 gap-3'>
									{categoryOptions.slice(0, 10).map((option) => (
										<div
											key={option.id}
											className='flex items-center space-x-2'
										>
											<Checkbox
												id={`category-${option.id}`}
												checked={option.checked}
												onCheckedChange={() =>
													toggleCategory(option.id)
												}
											/>
											<Label
												htmlFor={`category-${option.id}`}
												className='text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
											>
												{option.label}
											</Label>
										</div>
									))}
								</div>
								{categoryOptions.length > 10 && (
									<Button
										variant='link'
										size='sm'
										className='h-auto p-0'
									>
										Show more
									</Button>
								)}
							</div>

							<div className='space-y-4'>
								<h3 className='text-sm font-medium'>Tags</h3>
								<div className='flex flex-wrap gap-2'>
									{tagOptions.map((tag) => (
										<Badge
											key={tag.id}
											variant={tag.checked ? 'default' : 'outline'}
											className='cursor-pointer'
											onClick={() => toggleTag(tag.id)}
										>
											{tag.label}
											{tag.checked && <X className='w-3 h-3 ml-1' />}
										</Badge>
									))}
								</div>
							</div>

							<div className='space-y-4'>
								<div className='flex items-center justify-between'>
									<h3 className='text-sm font-medium'>
										Minimum Stars
									</h3>
									<span className='text-sm text-muted-foreground'>
										{minStars > 0
											? `${minStars.toLocaleString()}+`
											: 'Any'}
									</span>
								</div>
								<Slider
									value={[minStars]}
									min={0}
									max={100000}
									step={1000}
									onValueChange={(value) => {
										setMinStars(value[0]);
										updateFilters();
									}}
								/>
								<div className='flex justify-between text-xs text-muted-foreground'>
									<span>0</span>
									<span>25k</span>
									<span>50k</span>
									<span>75k</span>
									<span>100k+</span>
								</div>
							</div>

							<div className='space-y-4'>
								<h3 className='text-sm font-medium'>Last Updated</h3>
								<RadioGroup
									value={lastUpdated}
									onValueChange={(value) => {
										setLastUpdated(value);
										updateFilters();
									}}
								>
									<div className='flex items-center space-x-2'>
										<RadioGroupItem value='any' id='r1' />
										<Label htmlFor='r1'>Any time</Label>
									</div>
									<div className='flex items-center space-x-2'>
										<RadioGroupItem value='week' id='r2' />
										<Label htmlFor='r2'>This week</Label>
									</div>
									<div className='flex items-center space-x-2'>
										<RadioGroupItem value='month' id='r3' />
										<Label htmlFor='r3'>This month</Label>
									</div>
									<div className='flex items-center space-x-2'>
										<RadioGroupItem value='year' id='r4' />
										<Label htmlFor='r4'>This year</Label>
									</div>
								</RadioGroup>
							</div>

							<div className='space-y-4'>
								<h3 className='text-sm font-medium'>
									Maintenance Status
								</h3>
								<RadioGroup
									value={maintenance}
									onValueChange={(value) => {
										setMaintenance(value);
										updateFilters();
									}}
								>
									<div className='flex items-center space-x-2'>
										<RadioGroupItem value='any' id='m1' />
										<Label htmlFor='m1'>Any status</Label>
									</div>
									<div className='flex items-center space-x-2'>
										<RadioGroupItem value='active' id='m2' />
										<Label htmlFor='m2'>Actively maintained</Label>
									</div>
									<div className='flex items-center space-x-2'>
										<RadioGroupItem value='inactive' id='m3' />
										<Label htmlFor='m3'>Inactive (6+ months)</Label>
									</div>
								</RadioGroup>
							</div>

							<div className='space-y-4'>
								<h3 className='text-sm font-medium'>Features</h3>
								<div className='space-y-3'>
									<div className='flex items-center space-x-2'>
										<Checkbox
											id='typescript'
											checked={features.typescript}
											onCheckedChange={(checked) => {
												setFeatures((prev) => ({
													...prev,
													typescript: checked === true,
												}));
												updateFilters();
											}}
										/>
										<Label htmlFor='typescript'>
											TypeScript Support
										</Label>
									</div>
									<div className='flex items-center space-x-2'>
										<Checkbox
											id='ssr'
											checked={features.ssr}
											onCheckedChange={(checked) => {
												setFeatures((prev) => ({
													...prev,
													ssr: checked === true,
												}));
												updateFilters();
											}}
										/>
										<Label htmlFor='ssr'>Server-Side Rendering</Label>
									</div>
									<div className='flex items-center space-x-2'>
										<Checkbox
											id='treeshaking'
											checked={features.treeshaking}
											onCheckedChange={(checked) => {
												setFeatures((prev) => ({
													...prev,
													treeshaking: checked === true,
												}));
												updateFilters();
											}}
										/>
										<Label htmlFor='treeshaking'>Tree Shaking</Label>
									</div>
									<div className='flex items-center space-x-2'>
										<Checkbox
											id='testing'
											checked={features.testing}
											onCheckedChange={(checked) => {
												setFeatures((prev) => ({
													...prev,
													testing: checked === true,
												}));
												updateFilters();
											}}
										/>
										<Label htmlFor='testing'>Testing Utilities</Label>
									</div>
								</div>
							</div>
						</div>

						<SheetFooter className='flex-row justify-between gap-2'>
							<Button
								variant='outline'
								className='w-1/2'
								onClick={clearFilters}
							>
								Clear Filters
							</Button>
							<SheetClose asChild>
								<Button className='w-1/2'>Apply Filters</Button>
							</SheetClose>
						</SheetFooter>
					</SheetContent>
				</Sheet>

				{activeFilterCount > 0 && (
					<Button
						variant='ghost'
						size='sm'
						className='h-8'
						onClick={clearFilters}
					>
						Clear filters
					</Button>
				)}
			</div>

			{/* Active filters display */}
			{activeFilterCount > 0 && (
				<div className='flex flex-wrap gap-2'>
					{categoryOptions
						.filter((o) => o.checked)
						.map((category) => (
							<Badge
								key={category.id}
								variant='secondary'
								className='pl-1.5 pr-1'
							>
								{category.label}
								<Button
									variant='ghost'
									size='icon'
									className='w-5 h-5 p-0 ml-1'
									onClick={() => toggleCategory(category.id)}
								>
									<X className='w-3 h-3' />
								</Button>
							</Badge>
						))}

					{tagOptions
						.filter((o) => o.checked)
						.map((tag) => (
							<Badge
								key={tag.id}
								variant='secondary'
								className='pl-1.5 pr-1'
							>
								{tag.label}
								<Button
									variant='ghost'
									size='icon'
									className='w-5 h-5 p-0 ml-1'
									onClick={() => toggleTag(tag.id)}
								>
									<X className='w-3 h-3' />
								</Button>
							</Badge>
						))}

					{minStars > 0 && (
						<Badge variant='secondary' className='pl-1.5 pr-1'>
							{minStars.toLocaleString()}+ Stars
							<Button
								variant='ghost'
								size='icon'
								className='w-5 h-5 p-0 ml-1'
								onClick={() => {
									setMinStars(0);
									updateFilters();
								}}
							>
								<X className='w-3 h-3' />
							</Button>
						</Badge>
					)}

					{lastUpdated !== 'any' && (
						<Badge variant='secondary' className='pl-1.5 pr-1'>
							Updated:{' '}
							{lastUpdated === 'week'
								? 'This week'
								: lastUpdated === 'month'
								? 'This month'
								: 'This year'}
							<Button
								variant='ghost'
								size='icon'
								className='w-5 h-5 p-0 ml-1'
								onClick={() => {
									setLastUpdated('any');
									updateFilters();
								}}
							>
								<X className='w-3 h-3' />
							</Button>
						</Badge>
					)}
				</div>
			)}
		</div>
	);
}
