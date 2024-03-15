<script>
	import ArrowRightIcon from '$lib/components/ArrowRightIcon.svelte'
	import PostsList from '$lib/components/PostsList.svelte'
	import SocialLinks from '$lib/components/SocialLinks.svelte'
	import { avatar, bio, name } from '$lib/info.js'
	import * as Fluent from "fluent-svelte";
	import "fluent-svelte/theme.css";
	import { Button, Checkbox } from "fluent-svelte";

	/** @type {import('./$types').PageData} */
	export let data
</script>

<svelte:head>
  <title>{name}</title>
  <meta name="description" content={bio} />
</svelte:head>

<div class="flex flex-col flex-grow gap-8 pb-16">
  <!-- bio -->
  <section class="flex flex-col items-center gap-16 pt-8 pb-16">
      <div class="flex gap-6">
		  <Fluent.Button variant="accent" onclick="window.location.href='https://github.com/jpbandroid';">My GitHub</Fluent.Button>
	  </div>
      <p class="text-base text-zinc-600 dark:text-zinc-400">
        {bio}
      </p>
  </section>
  <section class="w-full">
    <div class="flex items-center justify-between gap-4 mb-8">
      <h2 class="text-sm font-medium sm:text-base text-zinc-500 dark:text-zinc-400">
        Recently Published Posts
      </h2>
	<Fluent.Button variant="accent" onclick="window.location.href='https://errortek-news.vercel.app/posts';">View all</Fluent.Button>
    </div>
    <PostsList posts={data.posts} />
  </section>
</div>
