<script lang="ts">
	import type { PageData } from './$types'
	import { base } from '$app/paths'

	export let data: PageData
</script>

<div class="container">
	<h1>Каталог лекций КузГТУ</h1>
	<p>
		Этот проект был создан, чтобы обеспечить удобный доступ к лекциям. <a
			href="https://github.com/LeFFaQ/svelte-lecture-catalog">Подробнее тут</a
		>
	</p>
	{#if data.posts.length != 0}
		{#each data.posts as post}
			<li>
				<a href="{base}/{post.slug}">{post.title}. {post.author}, {new Date(post.date).toLocaleDateString}</a>
			</li>
		{/each}
	{:else}
		<p>Здесь пока ничего нет</p>
	{/if}
</div>
