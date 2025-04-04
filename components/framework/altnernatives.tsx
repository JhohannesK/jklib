import React from 'react';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '../ui/card';
import { Framework } from '@/lib/types';
import Image from 'next/image';
import { Github, Package } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import Link from 'next/link';
import { getSimilarFrameworks } from '@/lib/utils';

const Altnernatives = ({ framework }: { framework: Framework }) => {
	return (
		<>
			<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
				{getSimilarFrameworks(framework, 6).map((alt) => (
					<Card className='py-3' key={alt.id}>
						<CardHeader className='pb-2'>
							<div className='flex items-center gap-2'>
								{alt.logo ? (
									<Image
										src={alt.logo || '/placeholder.svg'}
										alt={alt.name}
										width={32}
										height={32}
										className='rounded-md'
									/>
								) : (
									<div className='flex items-center justify-center w-8 h-8 rounded-md bg-primary/10 text-primary'>
										{alt.name.charAt(0)}
									</div>
								)}
								<CardTitle className='text-lg'>{alt.name}</CardTitle>
							</div>
						</CardHeader>
						<CardContent>
							<p className='text-sm line-clamp-3 text-muted-foreground'>
								{alt.description}
							</p>
							<div className='flex items-center gap-4 mt-3 text-sm text-muted-foreground'>
								<div className='flex items-center gap-1'>
									<Github className='h-3.5 w-3.5' />
									<span>{alt.githubUrl?.toLocaleString()}</span>
								</div>
								<div className='flex items-center gap-1'>
									<Package className='h-3.5 w-3.5' />
									<span>{alt.id}</span>
								</div>
							</div>
							<div className='flex flex-wrap gap-1 mt-3'>
								{alt.tags.slice(0, 3).map((tag) => (
									<Badge
										key={tag}
										variant='outline'
										className='text-xs'
									>
										{tag}
									</Badge>
								))}
							</div>
						</CardContent>
						<CardFooter>
							<Button variant='outline' className='w-full' asChild>
								<Link href={`/framework/${alt.id}`}>View Details</Link>
							</Button>
						</CardFooter>
					</Card>
				))}
			</div>

			<div>
				<h3 className='mb-4 text-xl font-semibold'>Comparison</h3>
				<div className='overflow-x-auto'>
					<table className='w-full border-collapse'>
						<thead>
							<tr className='border-b'>
								<th className='p-2 text-left'>Feature</th>
								<th className='p-2 text-left'>{framework.name}</th>
								{getSimilarFrameworks(framework, 3).map((alt) => (
									<th key={alt.id} className='p-2 text-left'>
										{alt.name}
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							<tr className='border-b'>
								<td className='p-2 font-medium'>GitHub Stars</td>
								<td className='p-2'>{0}</td>
								{getSimilarFrameworks(framework, 3).map((alt) => (
									<td key={alt.id} className='p-2'>
										{0}
									</td>
								))}
							</tr>
							<tr className='border-b'>
								<td className='p-2 font-medium'>Bundle Size</td>
								<td className='p-2'>32.7 kB</td>
								<td className='p-2'>42.1 kB</td>
								<td className='p-2'>18.4 kB</td>
								<td className='p-2'>56.3 kB</td>
							</tr>
							<tr className='border-b'>
								<td className='p-2 font-medium'>Learning Curve</td>
								<td className='p-2'>Medium</td>
								<td className='p-2'>Steep</td>
								<td className='p-2'>Easy</td>
								<td className='p-2'>Medium</td>
							</tr>
							<tr className='border-b'>
								<td className='p-2 font-medium'>TypeScript Support</td>
								<td className='p-2'>Excellent</td>
								<td className='p-2'>Good</td>
								<td className='p-2'>Excellent</td>
								<td className='p-2'>Fair</td>
							</tr>
							<tr className='border-b'>
								<td className='p-2 font-medium'>
									Server-Side Rendering
								</td>
								<td className='p-2'>Built-in</td>
								<td className='p-2'>Via Plugin</td>
								<td className='p-2'>Built-in</td>
								<td className='p-2'>Not Supported</td>
							</tr>
							<tr className='border-b'>
								<td className='p-2 font-medium'>Mobile Support</td>
								<td className='p-2'>Good</td>
								<td className='p-2'>Excellent</td>
								<td className='p-2'>Fair</td>
								<td className='p-2'>Good</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default Altnernatives;
