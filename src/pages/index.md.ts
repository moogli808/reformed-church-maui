export const prerender = true;

export async function GET() {
  const content = `# A Reformed Church Coming to Maui, Hawaii
Maui OPC · Maui, Hawaii
A mission work of the Orthodox Presbyterian Church
Website: https://reformedchurchmaui.com

## About
We are planting the first confessional Reformed church on the island of Maui, Hawaii — a mission work of the Orthodox Presbyterian Church (OPC).

## Why This Church
There's no confessional Reformed church on Maui yet. We're glad to bring the historic Christian faith here and invite others to join us. The nearest OPC congregation is Covenant Kapolei on Oahu. We are planting a church grounded in the Westminster Standards, committed to biblical worship, and rooted in the Maui community.

## What We Believe
We hold to the Westminster Confession of Faith and the historic Reformed faith. We believe in the sovereignty of God in salvation, the authority of Scripture alone, and worship shaped by the Bible.

## Status
Church plant phase — services have not yet begun. We are gathering a community of people interested in Reformed worship on Maui.

## Contact
Email: chrishartshorn5@gmail.com
Connect: https://reformedchurchmaui.com/connect/

## Links
- What we believe: https://reformedchurchmaui.com/what-we-believe/
- About: https://reformedchurchmaui.com/about/
- Visit: https://reformedchurchmaui.com/visit/
- Orthodox Presbyterian Church: https://opc.org
- Covenant Kapolei, Oahu: https://covenantkapolei.com
`;
  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
