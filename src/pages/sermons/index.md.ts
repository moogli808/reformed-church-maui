export const prerender = true;

export async function GET() {
  const content = `# Sermons
[CHURCH NAME] · Maui, Hawaii
A mission work of the Orthodox Presbyterian Church
Website: https://reformedchurchmaui.com

## Status
Sermons will be posted here once services begin. We are currently in the church plant phase.

## About Our Preaching
We practice expository preaching — working carefully through Scripture text by text, grounded in the whole counsel of God.

## Contact
Email: [CHRIS_EMAIL]
Connect: https://reformedchurchmaui.com/connect/
`;
  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
