import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageLoad } from './$types';
import { getAllPersonalityIds, getPersonalityById } from '$lib/content/personalities.content';

export const load: PageLoad = ({ params }) => {
  const personality = getPersonalityById(params.id);

  if (!personality) {
    throw error(404, 'Personality not found');
  }

  return {
    personality
  };
};

export const entries: EntryGenerator = () => {
  return getAllPersonalityIds();
};

export const prerender = true;
export const trailingSlash = 'always';
