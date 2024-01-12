---START

-DB
ja używam xampp
nazwa: expense-tracker
kodowanie: utf8mb4_polish_ci


CREATE TABLE expenses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  amount DECIMAL(20, 2) NOT NULL,
  type VARCHAR(50) DEFAULT 'expense',
  date DATE NOT NULL,
  category VARCHAR(50) NOT NULL,
  description VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE income (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  amount DECIMAL(20, 2) NOT NULL,
  type VARCHAR(50) DEFAULT 'income',
  date DATE NOT NULL,
  category VARCHAR(50) NOT NULL,
  description VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);



-BACKEND
plik: ".env" z zawartością PORT=5000
npm install express sequelize mysql2 cors nodemon dotenv
npm start


-FRONTEND
npm install axios chart.js moment react-chartjs-2 react-datepicker styled-components
