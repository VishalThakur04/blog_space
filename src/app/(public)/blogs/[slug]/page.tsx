export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <main className="p-8"><h1 className="text-2xl font-semibold">Blog: {slug}</h1></main>;
}