const Sequelize = require("sequelize");
const sequelize = require("../sequelize.js"); // Update with the correct path to your Sequelize config

const Income = sequelize.define(
  "income",
  {
    title: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    amount: {
      type: Sequelize.DECIMAL(20, 2),
      allowNull: false,
    },
    type: {
      type: Sequelize.STRING(50),
      defaultValue: "income",
    },
    date: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    category: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
    updated_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
  },
  {
    timestamps: true, // Enables createdAt and updatedAt fields
    createdAt: "created_at",
    updatedAt: "updated_at",
    freezeTableName: true, // Prevents Sequelize from renaming the table
  }
);

module.exports = Income;
