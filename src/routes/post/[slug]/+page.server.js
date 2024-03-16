import { posts } from '$lib/data/posts'
import { error } from '@sveltejs/kit'
import * as Fluent from "fluent-svelte";
import "fluent-svelte/theme.css";
import { Button, Checkbox, TextBlock } from "fluent-svelte";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const { slug } = params

  // get post with metadata
  const post = posts.find((post) => slug === post.slug)

  if (!post) {
    throw error(404, 'Post not found')
  }

  return {
    post
  }
}
