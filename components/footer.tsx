import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className='flex flex-col items-center justify-center px-3 py-6 border-t md:py-0 h-24 '>
			<div className='container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row'>
				<p className='text-sm leading-loose text-center text-muted-foreground md:text-left'>
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
