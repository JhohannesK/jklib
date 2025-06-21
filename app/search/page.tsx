import FrameworkCard from '@/components/framework-card';
import { getAllFrameworks } from '@/lib/utils';
import { notFound } from 'next/navigation';

export default async function SearchPage({
	searchParams,
}: {
	searchParams: Promise<{ q: string }>;
}) {
	const query = (await searchParams).q;

	if (!query) {
		notFound();
	}

	const allFrameworks = getAllFrameworks();
	const filteredFrameworks = allFrameworks.filter(
		(framework) =>
			framework.name.toLowerCase().includes(query.toLowerCase()) ||
			framework.description.toLowerCase().includes(query.toLowerCase()) ||
			framework.tags.some((tag) =>
				tag.toLowerCase().includes(query.toLowerCase())
			)
	);

	return (
		<main className='container max-w-6xl px-3 py-12 mx-auto'>
			<div className='space-y-8'>
				<h1 className='text-3xl font-bold'>Search results for "{query}"</h1>

				{filteredFrameworks.length > 0 ? (
					<div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
						{filteredFrameworks.map((framework) => (
							<FrameworkCard key={framework.id} framework={framework} />
						))}
					</div>
				) : (
					<div className='flex flex-col items-center justify-center gap-4 py-16 text-center rounded-lg bg-card'>
						<h3 className='text-xl font-semibold'>No Results Found</h3>
						<p className='text-muted-foreground'>
							Try searching for something else.
						</p>
					</div>
				)}
			</div>
		</main>
	);
}
