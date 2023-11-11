const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");
const cors = require("cors"); // Importa la biblioteca CORS

const url = "mongodb+srv://pruebas:123456789a@cluster0.mudy3h0.mongodb.net/iNote?retryWrites=true&w=majority";

const client = new MongoClient(url);

app.use(express.json());

app.use(cors());

client
  .connect()
  .then(() => {
    console.log("Conexión exitosa a MongoDB");
  })
  .catch((error) => {
    console.error("Error al conectar a MongoDB:", error);
  });


app.get("/api/noticias", async (req, res) => {
  try {
    const db = client.db("iNote");
    const collection = db.collection("noticias");
    const items = await collection.find({}).toArray();
    res.json(items);
  } catch (error) {
    console.error("Error al obtener documentos:", error);
    res.status(500).send(error);
  }
});

app.get("/api/last-noticias", async (req, res) => {
  try {
    const db = client.db("iNote");
    const collection = db.collection("noticias");
    const items = await collection.find({}).sort({ fecha: -1 }).limit(1).toArray();
    res.json(items);
  } catch (error) {
    console.error("Error al obtener documentos:", error);
    res.status(500).send(error);
  }
});


app.get("/api/last", async (req, res) => {
  try {
    const db = client.db("iNote");
    const collection = db.collection("noticias");
    const items = await collection.find({}).sort({ fecha: -1 }).limit(3).toArray();
    res.json(items);
  } catch (error) {
    console.error("Error al obtener documentos:", error);
    res.status(500).send(error);
  }
});

app.get("/api/ciudad/:ciudad", async (req, res) => {
  try {
    const ciudad = decodeURIComponent(req.params.ciudad);
    const db = client.db("iNote");
    const collection = db.collection("noticias");
    const items = await collection.find({ ciudad }).toArray();
    res.json(items);
  } catch (error) {
    console.error("Error al obtener documentos:", error);
    res.status(500).send(error);
  }
});



const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

process.on("SIGINT", () => {
  client.close().then(() => {
    console.log("Conexión de cliente de MongoDB cerrada");
    process.exit(0);
  });
});
