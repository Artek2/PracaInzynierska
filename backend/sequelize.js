const Sequelize = require("sequelize");

const sequelize = new Sequelize("expense-tracker", "root", "", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
  dialectOptions: {
    charset: "utf8mb4",
    //collate: "utf8mb4_general_ci",
  },
  define: {
    timestamps: true,
    freezeTableName: true,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Połączenie z bazą danych zostało nawiązane.");
  })
  .catch((err) => {
    console.error("Nie można połączyć się z bazą danych:", err);
  });

module.exports = sequelize;
