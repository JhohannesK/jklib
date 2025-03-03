import { Search } from 'lucide-react';
import Link from 'next/link';
import CategorySection from '@/components/category-section';
import FrameworkCard from '@/components/framework-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { categories } from '@/lib/categories';
import { featuredFrameworks } from '@/lib/data/featured-framework';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col w-full'>
			{/* Hero Section */}
			<section className='bg-gradient-to-b from-primary/10 to-background py-12 md:py-24 flex items-center justify-center flex-col'>
				<div className='container px-4 md:px-6'>
					<div className='flex flex-col items-center space-y-4 text-center'>
						<div className='space-y-2'>
							<h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl'>
								jklib
							</h1>
							<p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl'>
								A continuously expanded collection of frameworks,
								libraries, and tools for building things on the web.
							</p>
						</div>
						<div className='flex w-full max-w-sm items-center space-x-2'>
							<Input
								type='text'
								placeholder='Search frameworks, libraries, tools...'
							/>
							<Button type='submit' size='icon'>
								<Search className='h-4 w-4' />
							</Button>
						</div>
						<div className='flex flex-wrap justify-center gap-2'>
							{[
								'framework',
								'tools',
								'reactjs',
								'nextjs',
								'svelte',
								'libraries',
							].map((tag) => (
								<Link
									key={tag}
									href={`/tag/${tag}`}
									className='rounded-full bg-muted px-3 py-1 text-sm hover:bg-muted/80'
								>
									#{tag}
								</Link>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Featured Section */}
			<section className='py-12 flex items-center justify-center flex-col'>
				<div className='container px-4 md:px-6'>
					<h2 className='mb-6 text-2xl font-bold tracking-tight'>
						Featured Tools
					</h2>
					<div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
						{featuredFrameworks.map((framework) => (
							<FrameworkCard
								key={framework.name}
								framework={framework}
							/>
						))}
					</div>
				</div>
			</section>

			{/* Categories Section */}
			<section className='py-12 bg-muted/50 flex items-center justify-center flex-col'>
				<div className='container px-4 md:px-6'>
					<h2 className='mb-6 text-2xl font-bold tracking-tight'>
						Browse by Category
					</h2>
					<Tabs defaultValue='all' className='w-full'>
						<TabsList className='mb-4 flex flex-wrap h-auto'>
							<TabsTrigger value='all'>All</TabsTrigger>
							{categories.slice(0, 7).map((category) => (
								<TabsTrigger key={category.id} value={category.id}>
									{category.name}
								</TabsTrigger>
							))}
							<TabsTrigger value='more'>More...</TabsTrigger>
						</TabsList>
						<TabsContent value='all' className='space-y-8'>
							{categories.slice(0, 4).map((category) => (
								<CategorySection
									key={category.id}
									category={category}
								/>
							))}
							<div className='flex justify-center'>
								<Button variant='outline' asChild>
									<Link href='/categories'>View All Categories</Link>
								</Button>
							</div>
						</TabsContent>
						{categories.slice(0, 7).map((category) => (
							<TabsContent key={category.id} value={category.id}>
								<CategorySection category={category} />
							</TabsContent>
						))}
						<TabsContent value='more'>
							<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
								{categories.slice(7).map((category) => (
									<Link
										key={category.id}
										href={`/categories/${category.id}`}
										className='flex items-center gap-2 rounded-lg border p-4 hover:bg-muted'
									>
										{category.icon}
										<span>{category.name}</span>
									</Link>
								))}
							</div>
						</TabsContent>
					</Tabs>
				</div>
			</section>

			{/* GitHub Section */}
			<section className='py-12 flex items-center justify-center flex-col'>
				<div className='container px-4 md:px-6'>
					<div className='flex flex-col items-center justify-between gap-4 rounded-lg border bg-background p-6 text-center sm:p-10 md:flex-row md:text-left'>
						<div>
							<h3 className='text-2xl font-bold'>Contribute to jklib</h3>
							<p className='text-muted-foreground'>
								Help us expand our collection by adding your favorite
								tools and frameworks.
							</p>
						</div>
						<Button asChild>
							<a
								href='https://github.com/JhohannesK/jklib'
								target='_blank'
								rel='noopener noreferrer'
							>
								View on GitHub
							</a>
						</Button>
					</div>
				</div>
			</section>
		</main>
	);
}
