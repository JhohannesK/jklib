import FrameworkCard from '@/components/framework-card';
import { categories } from '@/lib/categories';
import React from 'react';

const page = async ({ params }: { params: Promise<{ category: string }> }) => {
	const { category } = await params;

	return (
		<div className='container h-screen py-12 mx-auto max-w-6xl'>
			{categories.map((cat) => {
				return (
					<React.Fragment key={cat.id}>
						{cat.id === category && (
							<div key={cat.id}>
								<div className='flex-1 space-y-4'>
									<h1 className='inline-block text-4xl font-bold tracking-tight lg:text-5xl'>
										{cat.id === category && cat.name}
									</h1>
								</div>
								<div className='grid grid-cols-1 gap-6 pt-12 md:grid-cols-2 lg:grid-cols-3'>
									{cat.items.map((item) => {
										return (
											<FrameworkCard
												key={item.id}
												framework={item}
											/>
										);
									})}
								</div>
							</div>
						)}
					</React.Fragment>
				);
			})}
		</div>
	);
};

export default page;
