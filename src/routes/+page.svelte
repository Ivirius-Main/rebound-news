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
<!--Bottom bar-->
	  <section style="padding-top: 10px; padding-bottom: 10px; padding-left: 25px; background: var(--fds-solid-background-base); border-top: 1px solid rgba(205, 205, 205, 0.25); display: flex; flex-direction: column; align-items: flex-start;">
<Fluent.TextBlock variant="bodyStrong" style="margin-top: 10px;">
			  The Rebound Team
		  </Fluent.TextBlock>
		  <Fluent.Button variant="hyperlink" onclick="window.location.href='https://ivirius.vercel.app/';" style="margin-top: 10px; margin-bottom: 10px;">Ivirius</Fluent.Button>
		  <Fluent.Button variant="hyperlink" onclick="window.location.href='https://errortek.vercel.app/';" style="margin-top: 10px; margin-bottom: 10px;">ErrorTek</Fluent.Button>
		  <Fluent.TextBlock variant="bodyStrong" style="margin-top: 10px;">
			  Website
		  </Fluent.TextBlock>
		  <Fluent.Button variant="hyperlink" onclick="window.location.href='https://fluent-svelte.vercel.app';" style="margin-top: 10px; margin-bottom: 10px;">Fluent Svelte</Fluent.Button>
		  <Fluent.Button variant="hyperlink" onclick="window.location.href='https://www.vercel.com';">Vercel</Fluent.Button>
	  </section>
</div>
