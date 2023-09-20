import { json } from '@sveltejs/kit'

async function getPosts() {
	let posts: App.Post[] = []

	const paths = import.meta.glob('/src/routes/posts/*.svx', { eager: true })

	for (const path in paths) {
		const file = paths[path]
		const slug = path.split('/').at(-1)?.replace('.svx', '')

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<App.Post, 'slug'>
			const post = { ...metadata, slug } satisfies App.Post

			metadata.published ? posts.push(post) : undefined
		}
	}

	posts = posts.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	)

	return posts
}

export async function GET() {
	const posts = await getPosts()

	return json(posts)
}
