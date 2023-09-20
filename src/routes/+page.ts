import type { PageLoad } from './$types'

export const load: PageLoad = async ({ fetch, params }) => {
	const res = await fetch('api/posts')
	const posts = (await res.json()) as App.Post[]

	return { posts }
}
