export const prerender = true;

export async function GET() {
  const content = `# Plan Your Visit
Maui OPC · Maui, Hawaii
A mission work of the Orthodox Presbyterian Church
Website: https://reformedchurchmaui.com

## Status
We are currently in the church plant phase — services have not yet begun. We are forming community and will announce our first service date via email.

## What to Expect (When Services Begin)
- A call to worship opening the service
- Singing of psalms and hymns
- Prayer
- Scripture reading
- Preaching from the Bible text
- The Lord's Supper (celebrated regularly)
- Benediction

## Who Should Come
Everyone is welcome. If you are looking for confessional Reformed worship on Maui, this is for you.

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
