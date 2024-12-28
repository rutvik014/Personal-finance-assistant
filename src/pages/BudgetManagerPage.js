import React, { useState } from 'react';
import BudgetDisplay from '../components/BudgetDisplay';
import BudgetForm from '../components/BudgetForm';
import BudgetTable from '../components/BudgetTable';

const BudgetManagerPage = () => {
  const [budgets, setBudgets] = useState([
    { category: 'Rent', allocatedAmount: 500, spentAmount: 300 },
    { category: 'Food', allocatedAmount: 300, spentAmount: 150 },
  ]);

  const handleAddBudget = (newBudget) => {
    setBudgets([...budgets, newBudget]);
  };

  return (
    <div className="container">
      <h1>Budget Manager</h1>
      <BudgetForm onAddBudget={handleAddBudget} />
      <BudgetDisplay budgets={budgets} />
      <BudgetTable budgets={budgets} />
    </div>
  );
};

export default BudgetManagerPage;
// The BudgetManagerPage component is a functional component that uses the useState hook to manage the state of the budgets array. The component renders a BudgetForm component to add new budgets, a BudgetDisplay component to display the total allocated and spent amounts, and a BudgetTable component to display the list of budgets.
