import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getInterviewById } from '$lib/content/interviews.content';

export const load: PageLoad = ({ params }) => {
  const interview = getInterviewById(params.id);
  
  if (!interview) {
    throw error(404, 'Interview not found');
  }
  
  return {
    interview
  };
};
