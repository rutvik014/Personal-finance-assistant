import React, { useState } from 'react';
import BudgetTable from './BudgetTable';
import ExpenseForm from './ExpenseForm';
import ExpenseTable from './ExpenseTable';

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);
  const [budgets, setBudgets] = useState([
    { category: 'Rent', allocatedAmount: 500, spentAmount: 300 },
    { category: 'Food', allocatedAmount: 300, spentAmount: 150 },
  ]);

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseTable expenses={expenses} />
      <BudgetTable budgets={budgets} />
    </div>
  );
};

export default Dashboard;
