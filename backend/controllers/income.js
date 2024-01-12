const Income = require("../models/IncomeModel"); // Ensure the path is correct to your Sequelize Income model

exports.addIncome = async (req, res) => {
  const { title, amount, category, description, date } = req.body;
  try {
    // create new income record
    const income = await Income.create({
      title,
      amount,
      category,
      description,
      date,
    });
    res.status(200).json({ message: "Income Added", income });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

exports.getIncome = async (req, res) => {
  try {
    const incomes = await Income.findAll({
      order: [["createdAt", "DESC"]], // Sequelize uses the `order` option
    });
    res.status(200).json(incomes);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

exports.deleteIncome = async (req, res) => {
  const { id } = req.params;
  try {
    await Income.destroy({ where: { id } });
    res.status(200).json({ message: "Income Deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};
