import { notFound } from 'next/navigation';
import { getAllFrameworks } from '@/lib/utils';
import FrameworkPage from '@/components/framework/framework-page';

export default async function page({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const framework = getAllFrameworks().find((f) => f.id === id);

	if (!framework) {
		notFound();
	}

	return <FrameworkPage framework={framework} />;
}
