export const prerender = true;

export async function GET() {
  const content = `# Reformed Church on Maui, Hawaii
Maui OPC · Maui, Hawaii
A mission work of the Orthodox Presbyterian Church
Website: https://reformedchurchmaui.com

## Summary
We are planting the first confessional Reformed congregation on the island of Maui — a mission work of the Orthodox Presbyterian Church.

## What Makes a Church Reformed?
A Reformed church holds to the historic Protestant confessions — in our case the Westminster Confession of Faith. Reformed churches believe in the sovereignty of God in salvation, the authority of Scripture alone, and worship shaped by the Bible rather than by cultural preference. If you've come from a PCA, OPC, or similar Reformed background, you'll recognize what we're building.

## Why Maui Needs a Reformed Church
Maui has evangelical churches, Catholic parishes, and mainline congregations — but no confessional Reformed church. The nearest OPC congregation has been on Oahu. We're glad to be planting here now — eager to make the historic Christian faith known on Maui and to invite others into it with us.

## Who We Are
Mission work of the Orthodox Presbyterian Church. Church plant phase — services not yet begun. Gathering a community of people interested in Reformed worship on Maui.

## Contact
Email: chrishartshorn5@gmail.com
Connect: https://reformedchurchmaui.com/connect/

## Related Pages
- What we believe: https://reformedchurchmaui.com/what-we-believe/
- Presbyterian Church Maui: https://reformedchurchmaui.com/presbyterian-church-maui/
`;
  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
