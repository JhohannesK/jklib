import React from 'react';
import { Button } from '../ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '../ui/card';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy } from 'lucide-react';
import { Framework } from '@/lib/types';

const Installation = ({ framework }: { framework: Framework }) => {
	return (
		<>
			<Card className='py-3'>
				<CardHeader>
					<CardTitle>Installation</CardTitle>
					<CardDescription>
						Multiple ways to install {framework.name}
					</CardDescription>
				</CardHeader>
				<CardContent className='space-y-6'>
					<div>
						<h3 className='mb-2 text-lg font-medium'>NPM</h3>
						<div className='relative'>
							<SyntaxHighlighter
								language='bash'
								style={tomorrow}
								className='rounded-md'
							>
								{`npm install ${framework.id}`}
							</SyntaxHighlighter>
							<Button
								variant='ghost'
								size='icon'
								className='absolute right-2 top-2'
								onClick={() =>
									navigator.clipboard.writeText(
										`npm install ${framework.id}`
									)
								}
							>
								<Copy className='w-4 h-4' />
							</Button>
						</div>
					</div>

					<div>
						<h3 className='mb-2 text-lg font-medium'>Yarn</h3>
						<div className='relative'>
							<SyntaxHighlighter
								language='bash'
								style={tomorrow}
								className='rounded-md'
							>
								{`yarn add ${framework.id}`}
							</SyntaxHighlighter>
							<Button
								variant='ghost'
								size='icon'
								className='absolute right-2 top-2'
								onClick={() =>
									navigator.clipboard.writeText(
										`yarn add ${framework.id}`
									)
								}
							>
								<Copy className='w-4 h-4' />
							</Button>
						</div>
					</div>

					<div>
						<h3 className='mb-2 text-lg font-medium'>CDN</h3>
						<div className='relative'>
							<SyntaxHighlighter
								language='html'
								style={tomorrow}
								className='rounded-md'
							>
								{`<script src="https://cdn.jsdelivr.net/npm/${framework.id}@latest/dist/${framework.id}.min.js"></script>`}
							</SyntaxHighlighter>
							<Button
								variant='ghost'
								size='icon'
								className='absolute right-2 top-2'
								onClick={() =>
									navigator.clipboard.writeText(
										`<script src="https://cdn.jsdelivr.net/npm/${framework.id}@latest/dist/${framework.id}.min.js"></script>`
									)
								}
							>
								<Copy className='w-4 h-4' />
							</Button>
						</div>
					</div>

					<div>
						<h3 className='mb-2 text-lg font-medium'>
							Package.json Dependencies
						</h3>
						<div className='relative'>
							<SyntaxHighlighter
								language='json'
								style={tomorrow}
								className='rounded-md'
							>
								{`{
  "dependencies": {
    "${framework.id}": "^2.3.1"
  }
}`}
							</SyntaxHighlighter>
							<Button
								variant='ghost'
								size='icon'
								className='absolute right-2 top-2'
								onClick={() =>
									navigator.clipboard.writeText(`{
  "dependencies": {
    "${framework.id}": "^2.3.1"
  }
}`)
								}
							>
								<Copy className='w-4 h-4' />
							</Button>
						</div>
					</div>
				</CardContent>
			</Card>

			<Card className='py-3'>
				<CardHeader>
					<CardTitle>Version History</CardTitle>
					<CardDescription>Recent releases and changes</CardDescription>
				</CardHeader>
				<CardContent className='space-y-4'>
					<div className='space-y-2'>
						<div className='flex items-center justify-between'>
							<h3 className='font-medium'>v2.3.1</h3>
							<span className='text-sm text-muted-foreground'>
								1 month ago
							</span>
						</div>
						<p className='text-sm'>
							Bug fixes and performance improvements
						</p>
						<ul className='pl-6 text-sm list-disc'>
							<li>Fixed an issue with event handling</li>
							<li>Improved rendering performance</li>
							<li>Updated dependencies</li>
						</ul>
					</div>

					<div className='space-y-2'>
						<div className='flex items-center justify-between'>
							<h3 className='font-medium'>v2.3.0</h3>
							<span className='text-sm text-muted-foreground'>
								3 months ago
							</span>
						</div>
						<p className='text-sm'>New features and enhancements</p>
						<ul className='pl-6 text-sm list-disc'>
							<li>Added new API for improved state management</li>
							<li>Enhanced TypeScript definitions</li>
							<li>Added support for server components</li>
						</ul>
					</div>

					<div className='space-y-2'>
						<div className='flex items-center justify-between'>
							<h3 className='font-medium'>v2.2.0</h3>
							<span className='text-sm text-muted-foreground'>
								6 months ago
							</span>
						</div>
						<p className='text-sm'>Major update with breaking changes</p>
						<ul className='pl-6 text-sm list-disc'>
							<li>Complete rewrite of core rendering engine</li>
							<li>New component API</li>
							<li>Improved documentation</li>
						</ul>
					</div>

					<Button variant='outline' className='w-full'>
						View Full Changelog
					</Button>
				</CardContent>
			</Card>
		</>
	);
};

export default Installation;
