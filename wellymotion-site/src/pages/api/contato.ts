// O número do WhatsApp fica exclusivamente no servidor, nunca no HTML público.
export const prerender = false;

export function POST() {
  return new Response(null, {
    status: 303,
    headers: {
      Location: 'https://wa.me/5593991845796?text=Oi%20Welly%2C%20vim%20pelo%20seu%20portf%C3%B3lio',
      'Cache-Control': 'no-store',
      'Referrer-Policy': 'no-referrer',
    },
  });
}
