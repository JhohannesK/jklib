import { Framework } from '@/lib/types';
import React from 'react';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '../ui/card';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Button } from '../ui/button';
import { BookOpen, Copy, Youtube } from 'lucide-react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

const getYouTubeVideoId = (url: string) => {
	const regex =
		/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
	const match = url.match(regex);
	return match ? match[1] : null;
};

const Tutorials = ({ framework }: { framework: Framework }) => {
	const tutorials = framework.tutorials || [];

	if (tutorials.length === 0) {
		return (
			<div className='flex flex-col items-center justify-center gap-4 py-16 text-center rounded-lg bg-card'>
				<Youtube className='w-16 h-16 text-muted-foreground' />
				<h3 className='text-xl font-semibold'>No Tutorials Found</h3>
				<p className='text-muted-foreground'>
					There are no YouTube tutorials linked for {framework.name} yet.
				</p>
			</div>
		);
	}

	return (
		<div className='grid gap-6 md:grid-cols-2'>
			{tutorials.map((url) => {
				const videoId = getYouTubeVideoId(url);
				if (!videoId) return null;

				return (
					<Card key={videoId} className='overflow-hidden'>
						<CardContent className='p-0'>
							<div className='aspect-video'>
								<iframe
									width='100%'
									height='100%'
									src={`https://www.youtube.com/embed/${videoId}`}
									title='YouTube video player'
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
									allowFullScreen
								></iframe>
							</div>
						</CardContent>
					</Card>
				);
			})}
		</div>
	);
};

export default Tutorials;
