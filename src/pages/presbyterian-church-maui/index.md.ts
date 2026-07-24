export const prerender = true;

export async function GET() {
  const content = `# Presbyterian Church on Maui, Hawaii
[CHURCH NAME] · Maui, Hawaii
A mission work of the Orthodox Presbyterian Church
Website: https://reformedchurchmaui.com

## Summary
We are planting a confessional Presbyterian church on Maui — elder-led, connectional, part of the Orthodox Presbyterian Church.

## What Makes a Church Presbyterian?
"Presbyterian" describes how a church is governed. Presbyterian churches are led by a session of ordained elders rather than a single pastor or congregational vote. Local churches are also connectional — accountable to a broader assembly (presbytery) of elders.

## Are All Presbyterian Churches the Same?
No. The OPC and PCA hold to the historic Westminster Standards. The PCUSA has departed from them. We are OPC — not affiliated with PCUSA.

## What to Expect as a Member
Real accountability in both directions — elders who know you personally, and a congregation with a voice through its session. New members meet with elders before joining.

## Planting on Maui
We are currently the only confessional Presbyterian church plant on Maui.
Full story: https://reformedchurchmaui.com/reformed-church-maui/

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
