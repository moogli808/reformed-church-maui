export const prerender = true;

export async function GET() {
  const content = `# About This Church Plant
[CHURCH NAME] · Maui, Hawaii
A mission work of the Orthodox Presbyterian Church
Website: https://reformedchurchmaui.com

## Who We Are
[CHRIS_BIO]

## Our Vision
Maui has no confessional Reformed church. Our vision is to plant one — a church where the Word is preached faithfully, the sacraments are administered rightly, and a genuine community of believers is built over time.

## Our Denomination
We are a mission work of the Orthodox Presbyterian Church (OPC), founded in 1936, holding to the Westminster Confession of Faith and Catechisms.
Learn more: https://opc.org

## Our Connection to Oahu
The nearest OPC congregation to Maui is Redeemer OPC in Waipahu, Oahu.
Redeemer OPC: https://redeemerhawaii.org

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
