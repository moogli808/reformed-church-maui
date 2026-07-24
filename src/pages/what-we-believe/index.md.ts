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
Careful preaching that works through the Bible text by text, psalms and hymns, baptism and the Lord's Supper, Scripture-shaped liturgy.

## Church Government
Presbyterian — governed by elders who together form a session, accountable to a broader assembly of elders called a presbytery.

## New to Reformed Theology?
Resources: Ligonier Ministries (ligonier.org), OPC resources (opc.org), Heidelblog (heidelblog.net), and the historic Reformed creeds and confessions themselves.

## FAQ
Q: Is the OPC the same as the Presbyterian Church?
A: Not exactly. There are a number of Presbyterian and Reformed denominations, each with its own history. The OPC is part of NAPARC (the North American Presbyterian and Reformed Council), a fellowship of confessional Reformed and Presbyterian denominations that includes churches like the PCA, as well as Reformed churches that aren't Presbyterian in government, like the URC. We'd be glad to talk through where we fit if you have questions.

Q: Do you have to be Reformed to attend?
A: Not at all. Visitors are always welcome.

Q: What Bible translation do you use?
A: OPC churches typically use the ESV.

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
