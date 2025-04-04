'use client';
import { ExternalLink, Heart, Github } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import Installation from './installation';
import Reviews from './reviews';
import Tutorials from './tutorials';
import Overview from './overview';
import { Framework } from '@/lib/types';
import { Badge } from '../ui/badge';

const FrameworkPage = ({ framework }: { framework: Framework }) => {
	const [activeTab, setActiveTab] = useState('overview');
	const [isFavorite, setIsFavorite] = useState(false);

	const toggleFavorite = () => {
		setIsFavorite(!isFavorite);
	};

	return (
		<main className='container max-w-6xl px-3 py-12 mx-auto'>
			<div className='space-y-8'>
				<div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
					<div className='flex items-center gap-4'>
						{framework.logo ? (
							<Image
								src={framework.logo}
								alt={framework.name}
								width={64}
								height={64}
								className='rounded-lg'
							/>
						) : (
							<div className='flex items-center justify-center w-16 h-16 text-2xl font-bold rounded-lg bg-primary/10 text-primary'>
								{framework.name.charAt(0)}
							</div>
						)}
						<div>
							<h1 className='text-3xl font-bold'>{framework.name}</h1>
							<div className='flex items-center gap-4 text-muted-foreground'>
								{framework.githubUrl && (
									<a
										href={framework.githubUrl}
										target='_blank'
										rel='noopener noreferrer'
										className='flex items-center gap-1 hover:text-primary'
									>
										<Github className='w-4 h-4' />
										<span>GitHub</span>
									</a>
								)}
								<div className='text-sm'>Updated 3 months ago</div>
							</div>
						</div>
					</div>
					<div className='flex gap-2'>
						<Button
							variant={isFavorite ? 'default' : 'outline'}
							size='sm'
							onClick={toggleFavorite}
						>
							<Heart
								className={`mr-1 h-4 w-4 ${
									isFavorite ? 'fill-current' : ''
								}`}
							/>
							{isFavorite ? 'Favorited' : 'Favorite'}
						</Button>
						<Button size='sm' asChild>
							<a
								href={framework.url}
								target='_blank'
								rel='noopener noreferrer'
							>
								<ExternalLink className='w-4 h-4 mr-1' />
								Visit Website
							</a>
						</Button>
					</div>
				</div>

				<div className='p-6 border rounded-lg bg-card'>
					<p className='text-lg'>{framework.description}</p>
					<div className='flex flex-wrap gap-2 mt-4'>
						{framework.tags.map((tag) => (
							<Badge key={tag} variant='secondary'>
								{tag}
							</Badge>
						))}
					</div>
				</div>

				<Tabs
					value={activeTab}
					onValueChange={setActiveTab}
					className='space-y-4'
				>
					<TabsList className='justify-start w-full'>
						<TabsTrigger value='overview'>Overview</TabsTrigger>
						<TabsTrigger value='installation'>Installation</TabsTrigger>
						<TabsTrigger value='tutorials'>Tutorials</TabsTrigger>
						<TabsTrigger value='reviews'>Reviews</TabsTrigger>
						<TabsTrigger value='alternatives'>Alternatives</TabsTrigger>
					</TabsList>

					<TabsContent value='overview' className='space-y-8'>
						<Overview framework={framework} />
					</TabsContent>

					<TabsContent value='installation' className='space-y-6'>
						<Installation framework={framework} />
					</TabsContent>

					<TabsContent value='tutorials' className='space-y-6'>
						<Tutorials framework={framework} />
					</TabsContent>

					<TabsContent value='reviews' className='space-y-6'>
						<Reviews framework={framework} />
					</TabsContent>

					<TabsContent
						value='alternatives'
						className='space-y-6'
					></TabsContent>
				</Tabs>
			</div>
		</main>
	);
};

export default FrameworkPage;
