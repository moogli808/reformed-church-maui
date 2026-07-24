export const prerender = true;

export async function GET() {
  const content = `# Sermons
Maui OPC · Maui, Hawaii
A mission work of the Orthodox Presbyterian Church
Website: https://reformedchurchmaui.com

## Status
Sermons will be posted here once services begin. We are gathering interest and will announce our launch date by email.

## About Our Preaching
We practice careful preaching — working through Scripture text by text, grounded in the whole counsel of God.

## Contact
Email: chrishartshorn5@gmail.com
Connect: https://reformedchurchmaui.com/connect/
`;
  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
