import { defineMDSveXConfig as defineConfig } from 'mdsvex'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex-svelte'
import relativeImages from 'mdsvex-relative-images'
import remarkUnwrapImages from 'remark-unwrap-images'

const config = defineConfig({
	//layout: 'src/lib/components/layout.svelte',
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [remarkMath, relativeImages, remarkUnwrapImages],
	rehypePlugins: [rehypeKatex]
})

export default config
