'use client';
import React from 'react';
import { LampContainer } from './ui/lamb';
import { Cover } from './ui/cover';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Search } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Hero = () => {
	const router = useRouter();
	const [query, setQuery] = useState('');

	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault();
		if (query) {
			router.push(`/search?q=${query}`);
		}
	};

	return (
		<section className='bg-gradient-to-b from-primary/10 to-background pb-12 md:pb-24 flex items-center justify-center flex-col'>
			<div className='container'>
				<div className='flex flex-col items-center space-y-4 text-center'>
					<LampContainer>
						<motion.h1
							initial={{ opacity: 0.5, y: 100 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{
								delay: 0.3,
								duration: 0.8,
								ease: 'easeInOut',
							}}
							className='mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl'
						>
							<div className='space-y-2'>
								<Cover>
									<h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl'>
										jklib
									</h1>
								</Cover>
								<p className='mx-auto max-w-[700px] text-muted-foreground text-xl'>
									A continuously expanded collection of frameworks,
									libraries, and tools for building things on the web.
								</p>
							</div>
						</motion.h1>
					</LampContainer>

					<form
						onSubmit={handleSearch}
						className='flex w-full max-w-sm items-center space-x-2'
					>
						<Input
							type='text'
							placeholder='Search frameworks, libraries, tools...'
							value={query}
							onChange={(e) => setQuery(e.target.value)}
						/>
						<Button type='submit' size='icon'>
							<Search className='h-4 w-4' />
						</Button>
					</form>
					<div className='flex flex-wrap justify-center gap-2 px-4 md:px-6'>
						{[
							'framework',
							'tools',
							'reactjs',
							'nextjs',
							'svelte',
							'libraries',
						].map((tag) => (
							<Link
								key={tag}
								href={`/tag/${tag}`}
								className='rounded-full bg-muted px-3 py-1 text-sm hover:bg-muted/80'
							>
								#{tag}
							</Link>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
