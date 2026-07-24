export const prerender = true;

export async function GET() {
  const content = `# About This Church Plant
Maui OPC · Maui, Hawaii
A mission work of the Orthodox Presbyterian Church
Website: https://reformedchurchmaui.com

## Who We Are
Rev. Chris Hartshorn serves as Regional Home Missionary for the Presbytery of Southern California, working across Southern California, Arizona, and Hawaii to support groups planting confessional Reformed churches. He has been planting churches for over 20 years, beginning with Calvary Chapel in New York City and Kansas before joining the Orthodox Presbyterian Church. Chris holds an M.Div. from Westminster Seminary California. He grew up nearby in Fullerton and lives in Anaheim Hills with his wife, Megan, and their four children.

## Our Vision
Maui has no confessional Reformed church. Our vision is to plant one — a church where the Word is preached faithfully, the sacraments are administered rightly, and a genuine community of believers is built over time, faithful to the Great Commission and eager to see God's glory made known across this island.

## Our Denomination
We are a mission work of the Orthodox Presbyterian Church (OPC), founded in 1936, holding to the Westminster Confession of Faith and Catechisms.
Learn more: https://opc.org

## Our Connection to Oahu
The nearest OPC congregation to Maui is Redeemer OPC in Waipahu, Oahu.
Redeemer OPC: https://redeemerhawaii.org

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
