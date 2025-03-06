import type React from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';
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
