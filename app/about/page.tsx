import Link from 'next/link';
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
	return (
		<main className='container max-w-3xl px-3 py-12 mx-auto'>
			<div className='max-w-3xl mx-auto space-y-8'>
				<div className='space-y-2'>
					<h1 className='text-4xl font-bold tracking-tight'>
						About jklib
					</h1>
					<p className='text-xl text-muted-foreground'>
						A curated collection of frontend development tools and
						frameworks
					</p>
				</div>

				<div className='space-y-4'>
					<h2 className='text-2xl font-bold tracking-tight'>
						What is jklib?
					</h2>
					<p>
						jklib is a continuously expanded collection of frameworks,
						libraries, and tools for building things on the web. It's
						designed to help developers discover and learn about the vast
						ecosystem of frontend development resources.
					</p>
					<p>
						This website is based on the{' '}
						<a
							href='https://github.com/JhohannesK/jklib'
							target='_blank'
							rel='noopener noreferrer'
							className='font-medium underline underline-offset-4'
						>
							JhohannesK/jklib
						</a>{' '}
						GitHub repository, which serves as a curated list of frontend
						development tools and frameworks in the readme.
					</p>
				</div>

				<div className='space-y-4'>
					<h2 className='text-2xl font-bold tracking-tight'>
						How to Contribute
					</h2>
					<p>
						We welcome contributions from the community! If you know of a
						great frontend tool or framework that's not listed here,
						please consider contributing to the repository.
					</p>
					<div className='flex justify-center py-4'>
						<Button asChild>
							<a
								href='https://github.com/JhohannesK/jklib'
								target='_blank'
								rel='noopener noreferrer'
								className='flex items-center gap-2'
							>
								<Github className='w-5 h-5' />
								<span>Contribute on GitHub</span>
							</a>
						</Button>
					</div>
				</div>

				<div className='space-y-4'>
					<h2 className='text-2xl font-bold tracking-tight'>Categories</h2>
					<p>
						jklib organizes tools and frameworks into various categories
						to make it easier to find what you're looking for. Some of the
						main categories include:
					</p>
					<ul className='pl-6 space-y-2 list-disc'>
						<li>3D/WebGL Frameworks</li>
						<li>Animations</li>
						<li>Audio</li>
						<li>Canvas and SVG</li>
						<li>Charts</li>
						<li>CSS/UI Frameworks</li>
						<li>Frontend Frameworks/UI Component Libraries</li>
						<li>And many more...</li>
					</ul>
					<div className='flex justify-center py-4'>
						<Button asChild>
							<Link href='/categories'>Browse All Categories</Link>
						</Button>
					</div>
				</div>
			</div>
		</main>
	);
}
