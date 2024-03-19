<script>
	export let as = 'div'
	export let href = undefined

	let _class = undefined
	export { _class as class }


	import * as Fluent from "fluent-svelte";
	import "fluent-svelte/theme.css";
	import { Button, Checkbox, TextBlock } from "fluent-svelte";
</script>

<svelte:element this={as} class={['relative flex flex-col items-start group', _class].join(' ')}>
  <slot name="eyebrow" />

  {#if $$slots.title}
    <div class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
      {#if href}
        <div class="blogCard"
        />
        <a {href} data-sveltekit-prefetch>
          <span class="absolute z-20 -inset-y-6 -inset-x-4 sm:-inset-x-6 sm:rounded-2xl" />
          <span class="relative z-10">
            <slot name="title" />
          </span>
        </a>
      {:else}
        <slot name="title" />
      {/if}
    </div>
  {/if}

  {#if $$slots.description}
    <div
      class="relative z-10 flex-1 text-sm text-zinc-600 dark:text-zinc-400"
      class:mt-2={!!$$slots.title}
    >
      <slot name="description" />
    </div>
  {/if}

  {#if $$slots.actions}
    <div aria-hidden="true" class="relative z-10 flex items-center mt-4">
      <slot name="actions" />
    </div>
  {/if}
</svelte:element>

<style>
	.blogCard {
	border: 1px solid var(--fds-card-stroke-default);
	border-radius: var(--fds-overlay-corner-radius);
	background-color: var(--fds-card-background-secondary);
	}
</style>
