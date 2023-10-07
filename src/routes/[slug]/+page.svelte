<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>
<div class="container">
	<h1>{data.meta.title} {new Date(data.meta.date).toLocaleDateString()}. {data.meta.author}</h1>

	<svelte:component this={data.content} />
</div>
