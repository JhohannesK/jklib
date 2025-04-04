import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from '@/components/ui/card';
import type { Framework } from '@/lib/types';

interface FrameworkCardProps {
	framework: Framework;
}

export default function FrameworkCard({ framework }: FrameworkCardProps) {
	return (
		<Card className='overflow-hidden transition-all hover:shadow-md'>
			<CardHeader className='p-4'>
				<div className='flex items-center gap-2'>
					{framework.logo ? (
						<Image
							src={framework.logo || '/placeholder.svg'}
							alt={framework.name}
							width={32}
							height={32}
							className='rounded-md'
						/>
					) : (
						<div className='flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary'>
							{framework.name.charAt(0)}
						</div>
					)}
					<div className='flex-1 truncate'>
						<Link
							href={`/framework/${framework.id}`}
							className='font-medium hover:underline'
						>
							{framework.name}
						</Link>
					</div>
				</div>
			</CardHeader>
			<CardContent className='p-4 pt-0'>
				<p className='line-clamp-2 text-sm text-muted-foreground'>
					{framework.description}
				</p>
				<div className='mt-3 flex flex-wrap gap-1'>
					{framework.tags.map((tag) => (
						<Badge key={tag} variant='secondary' className='text-xs'>
							{tag}
						</Badge>
					))}
				</div>
			</CardContent>
			<CardFooter className='flex items-center justify-between border-t bg-muted/50 p-4'>
				<div className='flex items-center gap-3 text-sm text-muted-foreground'>
					{framework.githubUrl && (
						<Link
							href={framework.githubUrl}
							target='_blank'
							rel='noopener noreferrer'
							className='flex items-center gap-1 hover:text-primary'
						>
							<Github className='h-3.5 w-3.5' />
							<span>GitHub</span>
						</Link>
					)}
				</div>
				<Button size='sm' variant='ghost' asChild>
					<a
						href={framework.url}
						target='_blank'
						rel='noopener noreferrer'
						className='flex items-center gap-1'
					>
						<span>Visit</span>
						<ExternalLink className='h-3.5 w-3.5' />
					</a>
				</Button>
			</CardFooter>
		</Card>
	);
}
