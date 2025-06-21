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
import FrameworkCard from '../framework-card';

const Alternatives = ({
	framework,
	allFrameworks,
}: {
	framework: Framework;
	allFrameworks: Framework[];
}) => {
	const alternatives = allFrameworks
		.filter(
			(item) =>
				item.category === framework.category && item.id !== framework.id
		)
		.sort(() => 0.5 - Math.random())
		.slice(0, 5);

	if (alternatives.length === 0) {
		return (
			<div className='flex flex-col items-center justify-center gap-4 py-16 text-center rounded-lg bg-card'>
				<h3 className='text-xl font-semibold'>No Alternatives Found</h3>
				<p className='text-muted-foreground'>
					There are no other frameworks in the same category yet.
				</p>
			</div>
		);
	}

	return (
		<div>
			<h2 className='mb-6 text-2xl font-bold'>
				Similar Frameworks in {framework.category}
			</h2>
			<div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
				{alternatives.map((alt) => (
					<FrameworkCard key={alt.id} framework={alt} />
				))}
			</div>
		</div>
	);
};

export default Alternatives;
