import { notFound } from 'next/navigation';
import { getAllFrameworks } from '@/lib/utils';
import FrameworkPage from '@/components/framework/framework-page';

async function getGithubRepoInfo(githubUrl?: string) {
	if (!githubUrl) return null;
	const repoPath = new URL(githubUrl).pathname;
	const repoApiUrl = `https://api.github.com/repos${repoPath}`;
	const readmeApiUrl = `https://api.github.com/repos${repoPath}/readme`;
	const releasesApiUrl = `https://api.github.com/repos${repoPath}/releases?per_page=5`;

	try {
		const [repoRes, readmeRes, releasesRes] = await Promise.all([
			fetch(repoApiUrl, {
				headers: { Accept: 'application/vnd.github.v3+json' },
				next: { revalidate: 3600 },
			}),
			fetch(readmeApiUrl, {
				headers: { Accept: 'application/vnd.github.v3.raw' },
				next: { revalidate: 3600 },
			}),
			fetch(releasesApiUrl, {
				headers: { Accept: 'application/vnd.github.v3+json' },
				next: { revalidate: 3600 },
			}),
		]);

		if (!repoRes.ok) return null;

		const repoData = await repoRes.json();
		const readmeData = readmeRes.ok ? await readmeRes.text() : null;
		const releasesData = releasesRes.ok ? await releasesRes.json() : null;

		return {
			stars: repoData.stargazers_count,
			open_issues: repoData.open_issues_count,
			pushed_at: repoData.pushed_at,
			readme: readmeData,
			latest_release: releasesData?.[0]?.tag_name || null,
			releases: releasesData,
		};
	} catch (error) {
		console.error(error);
		return null;
	}
}

async function getNpmPackageInfo(packageName?: string) {
	if (!packageName) return null;
	const apiUrl = `https://registry.npmjs.org/${packageName}/latest`;

	try {
		const response = await fetch(apiUrl, { next: { revalidate: 3600 } });
		if (!response.ok) return null;
		const data = await response.json();
		return {
			version: data.version,
			license: data.license,
			dependencies: data.dependencies
				? Object.keys(data.dependencies).length
				: 0,
		};
	} catch (error) {
		console.error(error);
		return null;
	}
}

export default async function page({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const allFrameworks = getAllFrameworks();
	const framework = allFrameworks.find((f) => f.id === id);

	if (!framework) {
		notFound();
	}

	const githubInfo = await getGithubRepoInfo(framework.githubUrl);
	const npmInfo = await getNpmPackageInfo(framework.id);

	return (
		<FrameworkPage
			framework={framework}
			githubInfo={githubInfo}
			npmInfo={npmInfo}
			allFrameworks={allFrameworks}
		/>
	);
}
