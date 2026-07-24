export const prerender = true;

export async function GET() {
  const content = `# What We Believe
Maui OPC · Maui, Hawaii
A mission work of the Orthodox Presbyterian Church
Website: https://reformedchurchmaui.com

## Summary
Our beliefs are rooted in the historic Christian faith as summarized in the Westminster Confession of Faith.

## The Bible
We believe the Bible is the inspired, inerrant Word of God — the final authority for faith and life.

## God
We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit.

## Salvation by Grace Alone
We are saved by grace alone, through faith alone, in Christ alone. From beginning to end, God receives the glory for our salvation.

## Westminster Confession of Faith
The Westminster Confession of Faith (1647) is our confessional standard. Full text: https://opc.org/wcf.html

## Worship
Expository preaching, psalms and hymns, baptism and the Lord's Supper, Scripture-shaped liturgy.

## Church Government
Presbyterian — governed by ordained elders, accountable to a broader assembly (presbytery).

## OPC vs Other Denominations
- OPC vs PCA: Sister denominations, nearly identical theology.
- OPC vs PCUSA: Very different. PCUSA has departed from historic Reformed confessions. We are not affiliated.
- OPC vs Reformed Baptist: Similar theology; key differences are baptism and church government.

## FAQ
Q: Is the OPC the same as the Presbyterian Church?
A: There are several Presbyterian denominations. OPC and PCA are confessional Reformed; PCUSA is mainline and has departed from historic doctrine.

Q: Do you have to be Reformed to attend?
A: Not at all. Visitors are always welcome.

Q: What Bible translation do you use?
A: OPC churches typically use the ESV or NASB. We will confirm once services begin.

Q: Is Reformed theology the same as Calvinist?
A: Yes, essentially. Both refer to the theological tradition from the Protestant Reformation.

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
