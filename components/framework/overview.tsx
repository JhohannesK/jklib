import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Copy, Github } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { Framework } from '@/lib/types';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

type GithubInfo = {
	stars: number;
	open_issues: number;
	pushed_at: string;
	readme: string | null;
	latest_release: string | null;
} | null;

type NpmInfo = {
	version: string;
	license: string;
	dependencies: number;
} | null;

const Overview = ({
	framework,
	githubInfo,
	npmInfo,
}: {
	framework: Framework;
	githubInfo: GithubInfo;
	npmInfo: NpmInfo;
}) => {
	console.log('🚀 ~ framework:', framework);
	const displayVersion = githubInfo?.latest_release || npmInfo?.version;
	const versionSource = githubInfo?.latest_release ? 'GitHub' : 'npm';

	return (
		<div className='grid gap-8 md:grid-cols-3'>
			<div className='space-y-6 md:col-span-2'>
				{githubInfo?.readme && (
					<Card className='py-3'>
						<CardHeader>
							<CardTitle>README</CardTitle>
						</CardHeader>
						<CardContent className='prose max-w-none dark:prose-invert'>
							<ReactMarkdown
								remarkPlugins={[remarkGfm]}
								rehypePlugins={[rehypeRaw]}
								components={{
									code({
										inline,
										className,
										children,
										...props
									}: {
										inline?: boolean;
										className?: string;
										children?: React.ReactNode;
									}) {
										const match = /language-(\w+)/.exec(
											className || ''
										);
										return !inline && match ? (
											<SyntaxHighlighter
												style={vscDarkPlus as any}
												language={match[1]}
												PreTag='div'
												{...props}
											>
												{String(children).replace(/\n$/, '')}
											</SyntaxHighlighter>
										) : (
											<code className={className} {...props}>
												{children}
											</code>
										);
									},
								}}
							>
								{githubInfo.readme}
							</ReactMarkdown>
						</CardContent>
					</Card>
				)}

				{/* <Card className='py-3'>
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
				</Card> */}
			</div>

			<div className='space-y-6'>
				<Card className='py-3'>
					<CardHeader>
						<CardTitle>Package Information</CardTitle>
					</CardHeader>
					<CardContent className='space-y-4'>
						{displayVersion && (
							<div>
								<p className='text-sm font-medium'>Latest Version</p>
								<p className='flex items-center justify-between'>
									<span className='font-mono'>
										{displayVersion.startsWith('v')
											? displayVersion
											: `v${displayVersion}`}
									</span>
									<Badge variant='outline'>{versionSource}</Badge>
								</p>
							</div>
						)}
						{npmInfo ? (
							<>
								<div>
									<p className='text-sm font-medium'>License</p>
									<p>{npmInfo.license}</p>
								</div>
								<div>
									<p className='text-sm font-medium'>Dependencies</p>
									<p>{npmInfo.dependencies} production</p>
								</div>
							</>
						) : (
							!displayVersion && (
								<p className='text-sm text-muted-foreground'>
									No package information available.
								</p>
							)
						)}
					</CardContent>
				</Card>

				<Card className='py-3'>
					<CardHeader>
						<CardTitle>Community Stats</CardTitle>
					</CardHeader>
					<CardContent className='space-y-4'>
						{githubInfo ? (
							<>
								{framework.githubUrl && (
									<div>
										<div className='flex items-center justify-between'>
											<p className='text-sm font-medium'>
												GitHub Repository
											</p>
											<a
												href={framework.githubUrl}
												target='_blank'
												rel='noopener noreferrer'
												className='flex items-center gap-1 hover:text-primary'
											>
												<Github className='w-4 h-4' />
												<span>View on GitHub</span>
											</a>
										</div>
									</div>
								)}
								<div>
									<div className='flex items-center justify-between'>
										<p className='text-sm font-medium'>Open Issues</p>
										<p>{githubInfo.open_issues}</p>
									</div>
								</div>
								<div>
									<div className='flex items-center justify-between'>
										<p className='text-sm font-medium'>Last Commit</p>
										<p>
											{new Date(
												githubInfo.pushed_at
											).toLocaleDateString()}
										</p>
									</div>
								</div>
							</>
						) : (
							<p className='text-sm text-muted-foreground'>
								No community stats available.
							</p>
						)}
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default Overview;
