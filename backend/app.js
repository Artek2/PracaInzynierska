const express = require("express");
const cors = require("cors");
const { readdirSync } = require("fs");
const app = express();

const sequelize = require("./sequelize");

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Modele zostały zsynchronizowane z bazą danych.");
  })
  .catch((error) => {
    console.error(
      "Wystąpił błąd podczas synchronizacji modeli z bazą danych:",
      error
    );
  });

require("dotenv").config();

const PORT = process.env.PORT;

//middlewares
app.use(express.json());
app.use(cors());

//routes
readdirSync("./routes").map((route) =>
  app.use("/api/v1", require("./routes/" + route))
);

const server = () => {
  app.listen(PORT, () => {
    console.log("listening to port:", PORT);
  });
};

server();

// const express = require("express");
// const cors = require("cors");
// const { readdirSync } = require("fs");
// const app = express();

// const sequelize = require("./sequelize"); // Ścieżka do pliku konfiguracyjnego Sequelize

//
// sequelize
//   .sync({ force: false })
//   .then(() => {
//     console.log("Modele zostały zsynchronizowane z bazą danych.");
//   })
//   .catch((error) => {
//     console.error(
//       "Wystąpił błąd podczas synchronizacji modeli z bazą danych:",
//       error
//     );
//   });

//
// require("dotenv").config();

// const PORT = process.env.PORT;

// //middlewares
// app.use(express.json());
// app.use(cors());

// //routes
// readdirSync("./routes").map((route) =>
//   app.use("/api/v1", require("./routes/" + route))
// );

// const server = () => {
//   db();
//   app.listen(PORT, () => {
//     console.log("listening to port:", PORT);
//   });
// };

// server();
