import type { ActionReturn } from 'svelte/action';

interface Attributes {
  'on:click_outside'?: (e: CustomEvent<void>) => void;
}

export function clickOutside(node: any): ActionReturn<{}, Attributes> {
  const handleClick = (event: any) => {
    if (node && !node.contains(event.target) && !event.defaultPrevented) {
      node.dispatchEvent(new CustomEvent('click_outside', node));
    }
  };

  document.addEventListener('mousedown', handleClick, true);

  return {
    destroy() {
      document.removeEventListener('mousedown', handleClick, true);
    }
  };
}
