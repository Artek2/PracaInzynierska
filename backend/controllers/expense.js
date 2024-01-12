const Expense = require("../models/ExpenseModel"); // Ensure the path is correct to your Sequelize Expense model

exports.addExpense = async (req, res) => {
  const { title, amount, category, description, date } = req.body;
  try {
    // create new expense record
    const expense = await Expense.create({
      title,
      amount,
      category,
      description,
      date,
    });
    res.status(200).json({ message: "Expense Added", expense });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

exports.getExpense = async (req, res) => {
  try {
    const expenses = await Expense.findAll({
      order: [["createdAt", "DESC"]], // Sequelize uses the `order` option
    });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

exports.deleteExpense = async (req, res) => {
  const { id } = req.params;
  try {
    await Expense.destroy({ where: { id } });
    res.status(200).json({ message: "Expense Deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};
