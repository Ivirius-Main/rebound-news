<script>
	import { website, name, bio, avatar } from '$lib/info.js'
	import ToC from '$lib/components/ToC.svelte'
	import ArrowLeftIcon from '$lib/components/ArrowLeftIcon.svelte'
	import SocialLinks from '$lib/components/SocialLinks.svelte'
	import { afterNavigate } from '$app/navigation'
	import PostDate from '$lib/components/PostDate.svelte'

	import * as Fluent from "fluent-svelte";
	import "fluent-svelte/theme.css";
	import { Button, Checkbox, TextBlock } from "fluent-svelte";

	/** @type {import('./$types').PageData} */
	export let data

	// generated open-graph image for sharing on social media.
	// see https://og-image.vercel.app/ for more options.
	const ogImage = `https://og-image.vercel.app/**${encodeURIComponent(
	data.post.title
	)}**?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg`

  const url = `${website}/${data.post.slug}`

  // if we came from /posts, we will use history to go back to preserve
  // posts pagination
  let canGoBack = false
  afterNavigate(({ from }) => {
    if (from && from.url.pathname.startsWith('/posts')) {
      canGoBack = true
    }
  })

  function goBack() {
    if (canGoBack) {
      history.back()
    }
  }
</script>

<svelte:head>
  <title>{data.post.title} - {name}</title>
  <meta name="description" content={data.post.preview.text} />
  <meta name="author" content={name} />

  <!-- Facebook Meta Tags -->
  <meta property="og:url" content={url} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={data.post.title} />
  <meta property="og:description" content={data.post.preview.text} />
  <meta property="og:image" content={ogImage} />

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content={website} />
  <meta property="twitter:url" content={url} />
  <meta name="twitter:title" content={data.post.title} />
  <meta name="twitter:description" content={data.post.preview.text} />
  <meta name="twitter:image" content={ogImage} />
</svelte:head>

<div class="root max-w-2xl mx-auto lg:max-w-none">
  <div class="hidden lg:block pt-8">
    <div class="sticky top-0 w-full flex justify-end pt-11 pr-8">
		  <Fluent.Button href={canGoBack ? undefined : '/posts'}
        aria-label="Go back to posts"
        on:click={"goBack"}
        on:keydown={"goBack"}>
			  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
				  <path
					fill-rule="evenodd"
					d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
					clip-rule="evenodd"
  />
			  </svg>
		  </Fluent.Button>
    </div>
  </div>

  <div class="w-full mx-auto overflow-x-hidden">
    <article>
      <header class="flex flex-col">
        <h1
          class="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
        >
          {data.post.title}
        </h1>
        <PostDate class="text-sm sm:text-base" post={data.post} decorate collapsed />
      </header>

      <!-- render the post -->
      <div class="prose dark:prose-invert ">
        <svelte:component this={data.component} />
      </div>
    </article>
    <hr />
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

  <!-- table of contents -->
  <div class="hidden xl:block pt-10">
    <aside class="sticky hidden w-48 ml-8 xl:block top-8" aria-label="Table of Contents">
      <ToC post={data.post} />
    </aside>
  </div>
</div>

<style lang="postcss">
	.root {
	display: grid;
	grid-template-columns: 1fr;
	}

	img {
	max-inline-size: 100%;
	block-size: auto;
	border: 1px solid var(--fds-surface-stroke-default);
	border-radius: var(--fds-overlay-corner-radius);
	box-shadow:
	0 2.74416px 2.74416px hsl(0, 0%, 0%, 3%),
	0 5.48831px 5.48831px hsl(0, 0%, 0%, 4%),
	0 13.7208px 10.9766px hsl(0, 0%, 0%, 5%),
	0 20.5812px 20.5812px hsl(0, 0%, 0%, 6%),
	0 41.1623px 41.1623px hsl(0, 0%, 0%, 7%),
	0 96.0454px 89.1851px hsl(0, 0%, 0%, 9%);
	transition: 200ms ease !important;
	-webkit-user-drag: none;
	aspect-ratio: 3 / 2;
	object-fit: cover;
	}

	@media screen(lg) {
	.root {
	/* 42rem matches max-w-2xl */
	grid-template-columns: 1fr 42rem 1fr;
	}
	}
</style>
