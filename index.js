const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

const expenses = [];

app.get('/expenses', (req, res) => {
  res.json(expenses);
});

app.post('/expenses', (req, res) => {
  const expense = req.body;
  expenses.push(expense);
  res.json(expense);
});

app.put('/expenses/:id', (req, res) => {
  const { id } = req.params;
  const expense = req.body;
  const index = expenses.findIndex((e) => e.id === id);
  expenses[index] = { ...expenses[index], ...expense };
  res.json(expenses[index]);
});

app.delete('/expenses/:id', (req, res) => {
  const { id } = req.params;
  const index = expenses.findIndex((e) => e.id === id);
  expenses.splice(index, 1);
  res.json({ message: 'Expense deleted successfully' });
});

