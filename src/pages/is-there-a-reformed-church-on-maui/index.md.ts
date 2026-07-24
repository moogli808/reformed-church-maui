export const prerender = true;

export async function GET() {
  const content = `# Is There a Reformed Church on Maui?
Maui OPC · Maui, Hawaii
A mission work of the Orthodox Presbyterian Church
Website: https://reformedchurchmaui.com

## Direct Answer
Not yet — but that is changing. We are planting the first confessional Reformed church on the island, a mission work of the Orthodox Presbyterian Church.

## Why the Search Comes Up Empty
Maui has evangelical, Catholic, and mainline Protestant churches — but nothing confessional Reformed has existed here until now.

## What Is Changing
Maui OPC is that church. Services have not yet begun.

## When Do We Launch?
We are gathering people interested in Reformed worship on Maui and will announce our launch date by email. Sign up to be the first to know.

## FAQ
Q: Is there an OPC church on Maui?
A: Not yet, but we are planting one now — the first confessional OPC mission work on the island.

Q: Where is the nearest OPC church to Maui right now?
A: Redeemer OPC in Waipahu, Oahu has been the nearest OPC congregation. We are planting the first one on Maui itself. Website: https://redeemerhawaii.org

Q: Can I get involved before the church officially launches?
A: Yes — we are building community now, before our first service. Reach out through the connect page.

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
