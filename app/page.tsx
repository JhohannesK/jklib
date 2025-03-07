import Link from 'next/link';
import CategorySection from '@/components/category-section';
import FrameworkCard from '@/components/framework-card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { categories } from '@/lib/categories';
import { featuredFrameworks } from '@/lib/data/featured-framework';
import Hero from '@/components/hero';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col w-full'>
			<Hero />
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
