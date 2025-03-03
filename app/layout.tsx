import type React from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Github, Menu } from 'lucide-react';
import Link from 'next/link';
import './globals.css';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
	title: 'jklib - A Collection of Frontend Tools and Frameworks',
	description:
		'A continuously expanded collection of frameworks, libraries, and tools for building things on the web.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className='min-h-screen bg-background font-sans antialiased'>
				<Analytics />
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<div className='relative flex min-h-screen flex-col w-full'>
						<header className='sticky top-0 flex items-center justify-center z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
							<div className='container flex h-16 items-center justify-between w-full'>
								<div className='flex items-center gap-2 md:gap-6'>
									<Sheet>
										<SheetTrigger asChild>
											<Button
												variant='ghost'
												size='icon'
												className='md:hidden'
											>
												<Menu className='h-5 w-5' />
												<span className='sr-only'>Toggle menu</span>
											</Button>
										</SheetTrigger>
										<SheetContent
											side='left'
											className='w-[300px] sm:w-[400px]'
										>
											<div className='flex h-16 items-center border-b'>
												<Link
													href='/'
													className='flex items-center gap-2 font-bold'
												>
													jklib
												</Link>
											</div>
											<nav className='flex flex-col gap-4 py-4'>
												<Link
													href='/'
													className='text-lg font-medium'
												>
													Home
												</Link>
												<Link
													href='/categories'
													className='text-lg font-medium'
												>
													Categories
												</Link>
												<Link
													href='/about'
													className='text-lg font-medium'
												>
													About
												</Link>
											</nav>
										</SheetContent>
									</Sheet>
									<Link
										href='/'
										className='flex items-center gap-2 font-bold'
									>
										jklib
									</Link>
									<nav className='hidden md:flex items-center gap-6'>
										<Link href='/' className='text-sm font-medium'>
											Home
										</Link>
										<Link
											href='/categories'
											className='text-sm font-medium'
										>
											Categories
										</Link>
										<Link
											href='/about'
											className='text-sm font-medium'
										>
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
						{children}
						<footer className='border-t py-6 md:py-0 flex items-center justify-center flex-col'>
							<div className='container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row'>
								<p className='text-center text-sm leading-loose text-muted-foreground md:text-left'>
									Built with ❤️ for the web development community.
									Based on{' '}
									<a
										href='https://github.com/JhohannesK/jklib'
										target='_blank'
										rel='noopener noreferrer'
										className='font-medium underline underline-offset-4'
									>
										JhohannesK/jklib
									</a>
								</p>
								<div className='flex items-center gap-4'>
									<Button variant='ghost' size='sm' asChild>
										<Link href='/privacy'>Privacy</Link>
									</Button>
									<Button variant='ghost' size='sm' asChild>
										<Link href='/terms'>Terms</Link>
									</Button>
								</div>
							</div>
						</footer>
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
