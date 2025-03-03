import Link from 'next/link';
import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import { Github, Menu, Search } from 'lucide-react';
import { Input } from './ui/input';
import { ModeToggle } from './mode-toggle';

const Navbar = () => {
	return (
		<header className='sticky top-0 flex items-center justify-center z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
			<div className='container flex h-16 items-center justify-between w-full'>
				<div className='flex items-center gap-2 md:gap-6'>
					<Sheet>
						<SheetTrigger asChild>
							<Button variant='ghost' size='icon' className='md:hidden'>
								<Menu className='h-5 w-5' />
								<span className='sr-only'>Toggle menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent side='left' className='w-[300px] sm:w-[400px]'>
							<div className='flex h-16 items-center border-b'>
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
								<Link href='/about' className='text-lg font-medium'>
									About
								</Link>
							</nav>
						</SheetContent>
					</Sheet>
					<Link href='/' className='flex items-center gap-2 font-bold'>
						jklib
					</Link>
					<nav className='hidden md:flex items-center gap-6'>
						<Link href='/' className='text-sm font-medium'>
							Home
						</Link>
						<Link href='/categories' className='text-sm font-medium'>
							Categories
						</Link>
						<Link href='/about' className='text-sm font-medium'>
							About
						</Link>
					</nav>
				</div>
				<div className='flex items-center gap-2'>
					<div className='hidden md:flex relative w-full max-w-sm items-center'>
						<Search className='absolute left-2.5 h-4 w-4 text-muted-foreground' />
						<Input
							type='search'
							placeholder='Search...'
							className='w-full rounded-full bg-background pl-8 md:w-[300px] lg:w-[320px]'
						/>
					</div>
					<Button variant='ghost' size='icon' asChild>
						<a
							href='https://github.com/JhohannesK/jklib'
							target='_blank'
							rel='noopener noreferrer'
						>
							<Github className='h-5 w-5' />
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
