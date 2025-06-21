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
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

type Release = {
	tag_name: string;
	name: string;
	body: string;
	published_at: string;
};

type GithubInfo = {
	releases: Release[] | null;
} | null;

function formatDistanceToNow(dateString: string) {
	const date = new Date(dateString);
	const now = new Date();
	const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
	const diffInMinutes = Math.floor(diffInSeconds / 60);
	const diffInHours = Math.floor(diffInMinutes / 60);
	const diffInDays = Math.floor(diffInHours / 24);
	const diffInMonths = Math.floor(diffInDays / 30.44);
	const diffInYears = Math.floor(diffInDays / 365.25);

	if (diffInYears > 0)
		return `${diffInYears} year${diffInYears > 1 ? 's' : ''} ago`;
	if (diffInMonths > 0)
		return `${diffInMonths} month${diffInMonths > 1 ? 's' : ''} ago`;
	if (diffInDays > 0)
		return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
	if (diffInHours > 0)
		return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
	if (diffInMinutes > 0)
		return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
	return `just now`;
}

const Installation = ({
	framework,
	githubInfo,
	version,
}: {
	framework: Framework;
	githubInfo: GithubInfo;
	version?: string;
}) => {
	return (
		<div className='space-y-6'>
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
								{`npm install ${
									framework.installationName || framework.id
								}`}
							</SyntaxHighlighter>
							<Button
								variant='ghost'
								size='icon'
								className='absolute text-white right-2 top-2'
								onClick={() =>
									navigator.clipboard.writeText(
										`npm install ${
											framework.installationName || framework.id
										}`
									)
								}
							>
								<Copy className='w-4 h-4' />
							</Button>
						</div>
					</div>

					<div>
						<h3 className='mb-2 text-lg font-medium'>PNPM</h3>
						<div className='relative'>
							<SyntaxHighlighter
								language='bash'
								style={tomorrow}
								className='rounded-md'
							>
								{`pnpm add ${
									framework.installationName || framework.id
								}`}
							</SyntaxHighlighter>
							<Button
								variant='ghost'
								size='icon'
								className='absolute text-white right-2 top-2'
								onClick={() =>
									navigator.clipboard.writeText(
										`pnpm add ${
											framework.installationName || framework.id
										}`
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
								{`yarn add ${
									framework.installationName || framework.id
								}`}
							</SyntaxHighlighter>
							<Button
								variant='ghost'
								size='icon'
								className='absolute text-white right-2 top-2'
								onClick={() =>
									navigator.clipboard.writeText(
										`yarn add ${
											framework.installationName || framework.id
										}`
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
								{`<script src="https://cdn.jsdelivr.net/npm/${
									framework.installationName || framework.id
								}@latest/dist/${
									framework.installationName || framework.id
								}.min.js"></script>`}
							</SyntaxHighlighter>
							<Button
								variant='ghost'
								size='icon'
								className='absolute text-white right-2 top-2'
								onClick={() =>
									navigator.clipboard.writeText(
										`<script src="https://cdn.jsdelivr.net/npm/${
											framework.installationName || framework.id
										}@latest/dist/${
											framework.installationName || framework.id
										}.min.js"></script>`
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
    "${framework.installationName || framework.id}": "^${
									version?.startsWith('v') ? version.slice(1) : version
								}"
  }
}`}
							</SyntaxHighlighter>
							<Button
								variant='ghost'
								size='icon'
								className='absolute text-white right-2 top-2'
								onClick={() =>
									navigator.clipboard.writeText(`{
  "dependencies": {
    "${framework.installationName || framework.id}": "^${version}"
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
					<CardDescription>
						Recent releases from the GitHub repository
					</CardDescription>
				</CardHeader>
				<CardContent className='space-y-6'>
					{githubInfo?.releases && githubInfo.releases.length > 0 ? (
						githubInfo.releases.map((release) => (
							<div key={release.tag_name} className='space-y-2'>
								<div className='flex items-center justify-between'>
									<h3 className='font-medium'>
										{release.name || release.tag_name}
									</h3>
									<span className='text-sm text-muted-foreground'>
										{formatDistanceToNow(release.published_at)}
									</span>
								</div>
								<div className='prose prose-sm max-w-none dark:prose-invert'>
									<ReactMarkdown
										remarkPlugins={[remarkGfm]}
										rehypePlugins={[rehypeRaw]}
									>
										{release.body}
									</ReactMarkdown>
								</div>
							</div>
						))
					) : (
						<p className='text-sm text-muted-foreground'>
							No release history found on GitHub.
						</p>
					)}

					{framework.githubUrl && (
						<Button variant='outline' className='w-full' asChild>
							<a
								href={`${framework.githubUrl}/releases`}
								target='_blank'
								rel='noopener noreferrer'
							>
								View Full Changelog on GitHub
							</a>
						</Button>
					)}
				</CardContent>
			</Card>
		</div>
	);
};

export default Installation;
