import React from 'react';

const ExpenseTable = ({ expenses }) => (
  <div>
    <h2>Expense Table</h2>
    <table className="table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense, index) => (
          <tr key={index}>
            <td>{expense.date}</td>
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ExpenseTable;
