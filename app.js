require("dotenv").config();
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT;
//const uri = process.env.MONGO_URI;

const getDataRoutes = require("./Backend/routes/Data/data.routes")


// Conectar a MongoDB
/*mongoose
  .connect(uri)
  .then(() => console.log("Conectado a la base de datos de MongoDB"))
  .catch((error) => console.error("Error al conectar con la base de datos:", error));
*/

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "frontend-web", "views"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "Frontend", "views")));
app.use(express.json());

app.use("/", getDataRoutes);

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
