<script>
	import Card from './Card.svelte'
	import ArrowRightIcon from './ArrowRightIcon.svelte'
	import * as Fluent from "fluent-svelte";
	import "fluent-svelte/theme.css";
	import { Button, Checkbox, TextBlock } from "fluent-svelte";

	export let post
</script>

<Card href={`/post/${post.slug}`} class="blogCard" data-sveltekit-prefetch>
  <slot slot="eyebrow" name="eyebrow" />
  <slot slot="title">{post.title}</slot>
  <div slot="description" class="prose dark:prose-invert">
    {@html post.preview.html}
  </div>
  <div slot="actions">
    <div class="flex items-center text-teal-500">
      <span class="text-sm font-medium">Read</span>
      <ArrowRightIcon class="w-4 h-4 ml-1" />
    </div>
  </div>
</Card>

<style>
	.prose > :global(p) {
	margin-top: 0;
	margin-bottom: 0;
	}

	.blog-card {
	@include flex($direction: column);
	block-size: auto;
	min-block-size: 380px;
	border: 1px solid var(--fds-card-stroke-default);
	border-radius: var(--fds-overlay-corner-radius);
	background-color: var(--fds-card-background-secondary);
	box-shadow: var(--fds-card-shadow);
	text-decoration: none;
	transition: var(--fds-control-normal-duration) ease;
	overflow: hidden;
	cursor: pointer;
	}

	.blogCard:hover {
	box-shadow: var(--fds-flyout-shadow);
	transform: translateY(-2px);
	}

	.blogCard:active {
	box-shadow: 0 1px 2px hsl(0, 0%, 0%, 0.13);
	transform: none;
	}

	img {
	flex: 0 0 auto;
	inline-size: 100%;
	block-size: 193.5px;
	-webkit-user-drag: none;
	}

	img {
	inline-size: 36px;
	block-size: 36px;
	border: 1px solid var(--fds-card-stroke-default);
	border-radius: 50%;
	}

	.post-info {
	@include flex($direction: column);
	color: var(--fds-text-tertiary);

	font: {
	size: 1.2rem;
	weight: 400;
	}

	a {
	margin: 0 0 2px;
	color: var(--fds-text-primary);

	font: {
	size: var(--fds-body-font-size);
	weight: 600;
	}

	text-decoration: none;
	}
	}
	}
	}

	.body {
	flex: 1 1 auto;
	padding: 24px 24px 0;
	color: var(--fds-text-secondary);
	font-size: 1.6rem;
	line-height: 24px;

	h5 {
	margin: 0 0 4px;
	color: var(--fds-text-primary);

	font: {
	size: 24px;
	weight: 600;
	}

	line-height: 32px;
	}
	}

</style>
