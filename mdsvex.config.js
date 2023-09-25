import { defineMDSveXConfig as defineConfig } from 'mdsvex'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex-svelte'
import relativeImages from 'mdsvex-relative-images'

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [remarkMath, relativeImages],
	rehypePlugins: [rehypeKatex]
})

export default config
