<script context="module">
	import { h2 } from '$lib/components/h2.svelte'
</script>

<script>
	//@ts-nocheck
	export let title
	export let description
	export let author
	export let date
	export let published
</script>

<h1>{title}</h1>
<p class="date">on: {date}</p>
<p class="date">by: {author}</p>
<article>
	<slot />
</article>
