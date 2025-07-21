import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  const response = await resolve(event);

  // Add security headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  
  // Content Security Policy
  response.headers.set(
    'Content-Security-Policy',
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://kit.fontawesome.com https://ka-f.fontawesome.com https://s3.amazonaws.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://kit.fontawesome.com https://ka-f.fontawesome.com https://cdn.knightlab.com https://cdn-images.mailchimp.com",
      "font-src 'self' https://fonts.gstatic.com https://ka-f.fontawesome.com",
      "img-src 'self' data: https:",
      "media-src 'self' https:",
      "connect-src 'self' https://ka-f.fontawesome.com https://us4.list-manage.com",
      "frame-src 'self' https://cdn.knightlab.com https://us4.list-manage.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self' https://us4.list-manage.com"
    ].join('; ')
  );

  return response;
};
