export const prerender = true;

export async function GET() {
  const content = `# Plan Your Visit
Maui OPC · Maui, Hawaii
A mission work of the Orthodox Presbyterian Church
Website: https://reformedchurchmaui.com

## Status
Services have not yet begun. We are gathering people who are interested in Reformed worship on Maui and will announce our first service date by email.

## What to Expect (When Services Begin)
- A call to worship opening the service
- Singing of psalms and hymns
- Prayer
- Reading of Scripture
- Preaching from the Bible
- The sacraments — baptism and the Lord's Supper, administered as appropriate
- Benediction

## Who Should Come
Everyone is welcome. If you are looking for confessional Reformed worship on Maui, this is for you.

## Families and Children
Families with children are welcome. We'll share more about children's ministry as those plans take shape.

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
