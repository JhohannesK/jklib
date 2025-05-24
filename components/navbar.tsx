import Link from 'next/link';
import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import { Github, Menu, Search } from 'lucide-react';
import { Search as SearchComponent } from '@/components/search';
import { ModeToggle } from './mode-toggle';

const Navbar = () => {
	return (
		<header className='sticky px-3 top-0 flex items-center justify-center z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
			<div className='container flex items-center justify-between w-full h-16'>
				<div className='flex items-center gap-2 md:gap-6'>
					<Sheet>
						<SheetTrigger asChild>
							<Button variant='ghost' size='icon' className='md:hidden'>
								<Menu className='w-5 h-5' />
								<span className='sr-only'>Toggle menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent
							side='left'
							className='w-[300px] sm:w-[400px] pl-3'
						>
							<div className='flex items-center h-16 border-b'>
								<Link
									href='/'
									className='flex items-center gap-2 font-bold'
								>
									jklib
								</Link>
							</div>
							<nav className='flex flex-col gap-4 py-4'>
								<Link href='/' className='text-lg font-medium'>
									Home
								</Link>
								<Link
									href='/categories'
									className='text-lg font-medium'
								>
									Categories
								</Link>
								<Link href='/search' className='text-lg font-medium'>
									Search
								</Link>
								<Link href='/about' className='text-lg font-medium'>
									About
								</Link>
							</nav>
						</SheetContent>
					</Sheet>
					<Link href='/' className='flex items-center gap-2 font-bold'>
						jklib
					</Link>
					<nav className='items-center hidden gap-6 md:flex'>
						<Link href='/' className='text-sm font-medium'>
							Home
						</Link>
						<Link href='/categories' className='text-sm font-medium'>
							Categories
						</Link>
						<Link href='/search' className='text-sm font-medium'>
							Search
						</Link>
						<Link href='/about' className='text-sm font-medium'>
							About
						</Link>
					</nav>
				</div>
				<div className='flex items-center gap-2'>
					<div className='items-center hidden max-w-sm md:flex'>
						<SearchComponent />
					</div>
					<Button variant='ghost' size='icon' asChild>
						<a
							href='https://github.com/JhohannesK/Frontend-Store'
							target='_blank'
							rel='noopener noreferrer'
						>
							<Github className='w-5 h-5' />
							<span className='sr-only'>GitHub</span>
						</a>
					</Button>
					<ModeToggle />
				</div>
			</div>
		</header>
	);
};

export default Navbar;
