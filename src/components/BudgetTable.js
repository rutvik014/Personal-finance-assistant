import React from 'react';

const BudgetTable = ({ budgets }) => (
  <div>
    <h2>Budget Table</h2>
    <table className="table">
      <thead>
        <tr>
          <th>Category</th>
          <th>Allocated Amount</th>
          <th>Spent Amount</th>
        </tr>
      </thead>
      <tbody>
        {budgets.map((budget, index) => (
          <tr key={index}>
            <td>{budget.category}</td>
            <td>{budget.allocatedAmount}</td>
            <td>{budget.spentAmount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default BudgetTable;
