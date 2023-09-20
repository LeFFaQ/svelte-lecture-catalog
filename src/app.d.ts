// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}

		type Post = {
			slug: string
			title: string
			description: string
			date: string
			author: string
			published: boolean
		}
	}
}

export {}
