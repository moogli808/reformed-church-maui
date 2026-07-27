export const prerender = true;

export async function GET() {
  const content = `# Get Connected
Maui OPC · Maui, Hawaii
A mission work of the Orthodox Presbyterian Church
Website: https://reformedchurchmaui.com

## Summary
We are forming community now, before our first service. If you are on Maui and interested in Reformed worship — or moving to Maui and looking for a church home — we would love to be in touch.

## How to Connect
- Email: chrishartshorn5@gmail.com
- Online form: https://reformedchurchmaui.com/connect/
- OPC church locator: https://opc.org/locator.html
- Sister congregation on Oahu: Covenant Kapolei — https://covenantkapolei.com

## Status
Church plant phase. Services have not yet begun. Sign up to be notified when we launch.
`;
  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
