import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className='border-t py-6 md:py-0 flex items-center justify-center flex-col'>
			<div className='container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row'>
				<p className='text-center text-sm leading-loose text-muted-foreground md:text-left'>
					Built with ❤️ for the web development community.
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
	);
};

export default Footer;
