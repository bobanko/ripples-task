const MongoClient = require("mongodb").MongoClient;

const config = require("./config.json");

class DbService {
  client = null;

  constructor(config) {
    this.config = config;
    this.connect(config);
  }

  async connect({ user, password, cluster, dbName }) {
    const uri = `mongodb+srv://${user}:${password}@${cluster}.mongodb.net/${dbName}?retryWrites=true&w=majority`;

    this.client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await this.client.connect();

    console.log("db connected");
    // client.close();
  }

  async createSession() {
    const sessionsCollection = this.client
      .db(this.config.dbName)
      .collection("sessions");

    const newSession = {
      createdAt: new Date(),
      updatedAt: new Date(),
      counter: this.config.defaultImageCount,
      sessionId: null,
    };

    try {
      const result = await sessionsCollection.insertOne(newSession);

      console.log(`Successfully inserted item with _id: ${result.insertedId}`);

      return result.insertedId;
    } catch (error) {
      console.log(error);

      return null;
    }
  }

  async getSessions() {
    const sessionsCollection = this.client
      .db(this.config.dbName)
      .collection("sessions");
    return await sessionsCollection.find().toArray();
  }
}

const dbService = new DbService(config);

module.exports = dbService;
