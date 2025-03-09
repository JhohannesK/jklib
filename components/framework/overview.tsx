import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { Button } from '../ui/button';
import { Copy, Star } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { Framework } from '@/lib/types';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Overview = ({ framework }: { framework: Framework }) => {
	return (
		<div className='grid gap-8 md:grid-cols-3'>
			<div className='space-y-6 md:col-span-2'>
				<Card className='py-3'>
					<CardHeader>
						<CardTitle>About {framework.name}</CardTitle>
					</CardHeader>
					<CardContent className=''>
						<p className='leading-relaxed'>
							{framework.description} Lorem ipsum dolor sit amet,
							consectetur adipiscing elit. Proin euismod, nisi vel
							consectetur interdum, libero augue commodo nisi, at lacinia
							enim ex vitae est. Etiam et condimentum tortor. Donec
							euismod, nisi vel consectetur interdum, libero augue
							commodo nisi, at lacinia enim ex vitae est.
						</p>
						<div className='mt-6'>
							<h3 className='mb-2 font-semibold'>Key Features:</h3>
							<ul className='pl-6 space-y-1 list-disc'>
								<li>Feature one of {framework.name}</li>
								<li>Another important feature</li>
								<li>Something that makes it stand out</li>
								<li>Performance benefits</li>
								<li>Developer experience improvements</li>
							</ul>
						</div>
					</CardContent>
				</Card>

				<Card className='py-3'>
					<CardHeader>
						<CardTitle>Getting Started</CardTitle>
					</CardHeader>
					<CardContent>
						<p className='mb-4'>
							Here's a simple example to get started with{' '}
							{framework.name}:
						</p>
						<div className='relative'>
							<SyntaxHighlighter
								language='javascript'
								style={tomorrow}
								className='rounded-md'
							>
								{`import { ${framework.name} } from '${framework.id}';\n\n// Example code\nconst app = new ${framework.name}({\n  target: document.body,\n  props: {\n    message: 'Hello world!'\n  }\n});`}
							</SyntaxHighlighter>
							<Button
								variant='ghost'
								size='icon'
								className='absolute right-2 top-2'
								onClick={() =>
									navigator.clipboard.writeText(
										`import { ${framework.name} } from '${framework.id}';\n\n// Example code\nconst app = new ${framework.name}({\n  target: document.body,\n  props: {\n    message: 'Hello world!'\n  }\n});`
									)
								}
							>
								<Copy className='w-4 h-4' />
							</Button>
						</div>
					</CardContent>
				</Card>
			</div>

			<div className='space-y-6'>
				<Card className='py-3'>
					<CardHeader>
						<CardTitle>Package Information</CardTitle>
					</CardHeader>
					<CardContent className='space-y-4'>
						<div>
							<p className='text-sm font-medium'>Latest Version</p>
							<p className='flex items-center justify-between'>
								<span className='font-mono'>v2.3.1</span>
								<Badge variant='outline'>Stable</Badge>
							</p>
						</div>
						<div>
							<p className='text-sm font-medium'>Bundle Size</p>
							<p className='flex items-center justify-between'>
								<span>32.7 kB</span>
								<span className='text-sm text-muted-foreground'>
									minified + gzipped
								</span>
							</p>
						</div>
						<div>
							<p className='text-sm font-medium'>Weekly Downloads</p>
							<p>1.2M+</p>
						</div>
						<div>
							<p className='text-sm font-medium'>License</p>
							<p>MIT</p>
						</div>
						<div>
							<p className='text-sm font-medium'>Dependencies</p>
							<p>3 production, 15 development</p>
						</div>
					</CardContent>
				</Card>

				<Card className='py-3'>
					<CardHeader>
						<CardTitle>Community Stats</CardTitle>
					</CardHeader>
					<CardContent className='space-y-4'>
						<div>
							<div className='flex items-center justify-between'>
								<p className='text-sm font-medium'>GitHub Stars</p>
								<p className='flex items-center'>
									<Star className='w-4 h-4 mr-1 text-yellow-400' />
									{framework.stars?.toLocaleString() || 0}
								</p>
							</div>
							<Progress value={85} className='h-2 mt-2' />
						</div>
						<div>
							<div className='flex items-center justify-between'>
								<p className='text-sm font-medium'>Contributors</p>
								<p>146</p>
							</div>
							<Progress value={70} className='h-2 mt-2' />
						</div>
						<div>
							<div className='flex items-center justify-between'>
								<p className='text-sm font-medium'>Open Issues</p>
								<p>78</p>
							</div>
							<Progress value={35} className='h-2 mt-2' />
						</div>
						<div>
							<div className='flex items-center justify-between'>
								<p className='text-sm font-medium'>Last Commit</p>
								<p>2 days ago</p>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default Overview;
