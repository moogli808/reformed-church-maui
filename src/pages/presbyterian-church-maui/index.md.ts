export const prerender = true;

export async function GET() {
  const content = `# Presbyterian Church on Maui, Hawaii
Maui OPC · Maui, Hawaii
A mission work of the Orthodox Presbyterian Church
Website: https://reformedchurchmaui.com

## Summary
We are planting a confessional Presbyterian church on Maui — elder-led, connectional, part of the Orthodox Presbyterian Church.

## What Makes a Church Presbyterian?
"Presbyterian" describes how a church is governed. A Presbyterian church is led by its session — the minister(s) and ruling elders together — who give oversight and provide pastoral care. Local churches are also part of a broader assembly of elders, called a presbytery, providing accountability beyond the local church.

## Are All Presbyterian Churches the Same?
Not exactly — there's a range of Presbyterian and Reformed denominations, each with its own history and practice. The OPC is part of NAPARC (the North American Presbyterian and Reformed Council), a fellowship that includes churches like the PCA and Reformed-but-not-Presbyterian churches like the URC.

## What to Expect as a Member
Real accountability in both directions — elders who know you personally, and a congregation with a voice through its session. New members meet with elders before joining.

## Planting on Maui
We are currently the only confessional Presbyterian church plant on Maui.
Full story: https://reformedchurchmaui.com/reformed-church-maui/

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
