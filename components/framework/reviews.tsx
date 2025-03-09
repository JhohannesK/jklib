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
import { Button } from '../ui/button';
import { Star, ThumbsDown, ThumbsUp } from 'lucide-react';
import { Progress } from '../ui/progress';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

const Reviews = ({ framework }: { framework: Framework }) => {
	return (
		<Card className='py-3'>
			<CardHeader>
				<div className='flex items-center justify-between'>
					<CardTitle>Reviews & Ratings</CardTitle>
					<Button>Write a Review</Button>
				</div>
				<CardDescription>
					What the community thinks about {framework.name}
				</CardDescription>
			</CardHeader>
			<CardContent className='space-y-6'>
				<div className='flex flex-col gap-8 md:flex-row'>
					<div className='flex flex-col items-center justify-center space-y-2 md:w-1/3'>
						<div className='text-5xl font-bold'>4.8</div>
						<div className='flex gap-1'>
							<Star className='w-5 h-5 fill-primary text-primary' />
							<Star className='w-5 h-5 fill-primary text-primary' />
							<Star className='w-5 h-5 fill-primary text-primary' />
							<Star className='w-5 h-5 fill-primary text-primary' />
							<Star className='w-5 h-5 fill-muted text-muted-foreground' />
						</div>
						<div className='text-sm text-muted-foreground'>
							Based on 127 reviews
						</div>
					</div>

					<div className='space-y-2 md:w-2/3'>
						<div className='flex items-center gap-2'>
							<div className='w-8 text-sm font-medium'>5★</div>
							<Progress value={85} className='flex-1 h-2' />
							<div className='w-8 text-sm text-muted-foreground'>
								85%
							</div>
						</div>
						<div className='flex items-center gap-2'>
							<div className='w-8 text-sm font-medium'>4★</div>
							<Progress value={12} className='flex-1 h-2' />
							<div className='w-8 text-sm text-muted-foreground'>
								12%
							</div>
						</div>
						<div className='flex items-center gap-2'>
							<div className='w-8 text-sm font-medium'>3★</div>
							<Progress value={2} className='flex-1 h-2' />
							<div className='w-8 text-sm text-muted-foreground'>2%</div>
						</div>
						<div className='flex items-center gap-2'>
							<div className='w-8 text-sm font-medium'>2★</div>
							<Progress value={1} className='flex-1 h-2' />
							<div className='w-8 text-sm text-muted-foreground'>1%</div>
						</div>
						<div className='flex items-center gap-2'>
							<div className='w-8 text-sm font-medium'>1★</div>
							<Progress value={0} className='flex-1 h-2' />
							<div className='w-8 text-sm text-muted-foreground'>0%</div>
						</div>
					</div>
				</div>

				<div className='space-y-4'>
					<div className='p-4 border rounded-lg'>
						<div className='flex items-center justify-between mb-2'>
							<div className='flex items-center gap-2'>
								<Avatar className='w-8 h-8'>
									<AvatarFallback>SD</AvatarFallback>
								</Avatar>
								<div>
									<div className='font-medium'>Sarah Doe</div>
									<div className='text-xs text-muted-foreground'>
										Full Stack Developer
									</div>
								</div>
							</div>
							<div className='flex gap-1'>
								<Star className='w-4 h-4 fill-primary text-primary' />
								<Star className='w-4 h-4 fill-primary text-primary' />
								<Star className='w-4 h-4 fill-primary text-primary' />
								<Star className='w-4 h-4 fill-primary text-primary' />
								<Star className='w-4 h-4 fill-primary text-primary' />
							</div>
						</div>
						<p className='mb-2'>
							I've been using {framework.name} for over a year now and
							I'm incredibly impressed with its performance and developer
							experience. The documentation is excellent and the
							community is very helpful.
						</p>
						<div className='flex items-center justify-between'>
							<div className='text-xs text-muted-foreground'>
								Posted 2 months ago
							</div>
							<div className='flex items-center gap-3'>
								<Button
									variant='ghost'
									size='sm'
									className='h-8 gap-1 px-2'
								>
									<ThumbsUp className='h-3.5 w-3.5' />
									<span>23</span>
								</Button>
								<Button
									variant='ghost'
									size='sm'
									className='h-8 gap-1 px-2'
								>
									<ThumbsDown className='h-3.5 w-3.5' />
									<span>1</span>
								</Button>
							</div>
						</div>
					</div>

					<div className='p-4 border rounded-lg'>
						<div className='flex items-center justify-between mb-2'>
							<div className='flex items-center gap-2'>
								<Avatar className='w-8 h-8'>
									<AvatarFallback>MK</AvatarFallback>
								</Avatar>
								<div>
									<div className='font-medium'>Mike Kennedy</div>
									<div className='text-xs text-muted-foreground'>
										Frontend Developer
									</div>
								</div>
							</div>
							<div className='flex gap-1'>
								<Star className='w-4 h-4 fill-primary text-primary' />
								<Star className='w-4 h-4 fill-primary text-primary' />
								<Star className='w-4 h-4 fill-primary text-primary' />
								<Star className='w-4 h-4 fill-primary text-primary' />
								<Star className='w-4 h-4 text-muted-foreground' />
							</div>
						</div>
						<p className='mb-2'>
							{framework.name} has some great features but the learning
							curve is a bit steep. Once you get past the initial
							challenges, it's a joy to work with. I particularly like
							the state management solution it provides.
						</p>
						<div className='flex items-center justify-between'>
							<div className='text-xs text-muted-foreground'>
								Posted 4 months ago
							</div>
							<div className='flex items-center gap-3'>
								<Button
									variant='ghost'
									size='sm'
									className='h-8 gap-1 px-2'
								>
									<ThumbsUp className='h-3.5 w-3.5' />
									<span>17</span>
								</Button>
								<Button
									variant='ghost'
									size='sm'
									className='h-8 gap-1 px-2'
								>
									<ThumbsDown className='h-3.5 w-3.5' />
									<span>3</span>
								</Button>
							</div>
						</div>
					</div>

					<div className='p-4 border rounded-lg'>
						<div className='flex items-center justify-between mb-2'>
							<div className='flex items-center gap-2'>
								<Avatar className='w-8 h-8'>
									<AvatarFallback>JW</AvatarFallback>
								</Avatar>
								<div>
									<div className='font-medium'>Jason Wong</div>
									<div className='text-xs text-muted-foreground'>
										Senior Developer
									</div>
								</div>
							</div>
							<div className='flex gap-1'>
								<Star className='w-4 h-4 fill-primary text-primary' />
								<Star className='w-4 h-4 fill-primary text-primary' />
								<Star className='w-4 h-4 fill-primary text-primary' />
								<Star className='w-4 h-4 fill-primary text-primary' />
								<Star className='w-4 h-4 fill-primary text-primary' />
							</div>
						</div>
						<p className='mb-2'>
							After trying several alternatives, I've settled on{' '}
							{framework.name} for all my projects. The ecosystem is
							mature, the tooling is excellent, and the performance can't
							be beat. Highly recommended for teams of all sizes.
						</p>
						<div className='flex items-center justify-between'>
							<div className='text-xs text-muted-foreground'>
								Posted 1 month ago
							</div>
							<div className='flex items-center gap-3'>
								<Button
									variant='ghost'
									size='sm'
									className='h-8 gap-1 px-2'
								>
									<ThumbsUp className='h-3.5 w-3.5' />
									<span>32</span>
								</Button>
								<Button
									variant='ghost'
									size='sm'
									className='h-8 gap-1 px-2'
								>
									<ThumbsDown className='h-3.5 w-3.5' />
									<span>0</span>
								</Button>
							</div>
						</div>
					</div>
				</div>

				<Button variant='outline' className='w-full'>
					Load More Reviews
				</Button>

				<div className='pt-6 border-t'>
					<h3 className='mb-4 text-lg font-medium'>Write a Review</h3>
					<div className='space-y-4'>
						<div className='space-y-2'>
							<Label htmlFor='rating'>Rating</Label>
							<div className='flex gap-1'>
								<Button
									variant='outline'
									size='icon'
									className='w-8 h-8'
								>
									<Star className='w-4 h-4' />
								</Button>
								<Button
									variant='outline'
									size='icon'
									className='w-8 h-8'
								>
									<Star className='w-4 h-4' />
								</Button>
								<Button
									variant='outline'
									size='icon'
									className='w-8 h-8'
								>
									<Star className='w-4 h-4' />
								</Button>
								<Button
									variant='outline'
									size='icon'
									className='w-8 h-8'
								>
									<Star className='w-4 h-4' />
								</Button>
								<Button
									variant='outline'
									size='icon'
									className='w-8 h-8'
								>
									<Star className='w-4 h-4' />
								</Button>
							</div>
						</div>
						<div className='space-y-2'>
							<Label htmlFor='review'>Your Review</Label>
							<Textarea
								id='review'
								placeholder='Share your experience with this framework...'
							/>
						</div>
						<Button>Submit Review</Button>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export default Reviews;
