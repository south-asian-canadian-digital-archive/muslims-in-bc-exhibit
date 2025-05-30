import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageLoad } from './$types';
import { getAllInterviewIds, getInterviewById } from '$lib/content/interviews.content';

export const load: PageLoad = ({ params }) => {
  const interview = getInterviewById(params.id);

  if (!interview) {
    throw error(404, 'Interview not found');
  }

  return {
    interview
  };
};

export const entries: EntryGenerator = () => {
  return getAllInterviewIds();
};

export const prerender = true;
export const trailingSlash = 'always';