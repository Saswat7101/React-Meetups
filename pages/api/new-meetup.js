import { MongoClient } from "mongodb";

// api/new-meetup
// POST/api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://mohantysaswat154_db_user:oPNliTEYHDfCdUfe@cluster0.q9sb7tz.mongodb.net/meetups?appName=Cluster0",
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);

    console.log(result);
    client.close();

    res.status(201).json({
      message: "Meetup Inserted!",
    });
  }
}

export default handler;
