import Link from 'next/link';
import { categories } from '@/lib/categories';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

export default function CategoriesPage() {
	return (
		<main className='container py-12 mx-auto max-w-6xl'>
			<div className='flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8'>
				<div className='flex-1 space-y-4'>
					<h1 className='inline-block text-4xl font-bold tracking-tight lg:text-5xl'>
						Categories
					</h1>
					<p className='text-xl text-muted-foreground'>
						Browse all frontend development tools and frameworks by
						category.
					</p>
				</div>
			</div>
			<div className='grid grid-cols-1 gap-6 pt-12 md:grid-cols-2 lg:grid-cols-3'>
				{categories.map((category) => (
					<Card key={category.id} className='overflow-hidden py-5'>
						<CardHeader className='flex flex-row items-center gap-4 pb-2'>
							<div className='flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10'>
								{category.icon}
							</div>
							<div>
								<CardTitle>{category.name}</CardTitle>
								<CardDescription>
									{category.items.length} tools
								</CardDescription>
							</div>
						</CardHeader>
						<CardContent>
							<div className='space-y-2'>
								<div className='flex flex-wrap gap-1'>
									{category.items.slice(0, 5).map((item) => (
										<Button
											key={item.id}
											variant='outline'
											size='sm'
											asChild
										>
											<Link href={`/framework/${item.id}`}>
												{item.name}
											</Link>
										</Button>
									))}
									{category.items.length > 5 && (
										<Button variant='ghost' size='sm'>
											+{category.items.length - 5} more
										</Button>
									)}
								</div>
								<Button className='w-full' asChild>
									<Link href={`/categories/${category.id}`}>
										View Category
									</Link>
								</Button>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</main>
	);
}
