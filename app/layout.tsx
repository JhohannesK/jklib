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
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

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
						<Navbar />
						{children}
						<Footer />
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
