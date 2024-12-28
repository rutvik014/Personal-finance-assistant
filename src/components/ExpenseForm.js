import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ExpenseForm = ({ onAddExpense }) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState('');
  const [receipt, setReceipt] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      amount,
      category,
      date,
      description,
      receipt,
    };

    onAddExpense(newExpense);

    // Clear form after submission
    setAmount('');
    setCategory('');
    setDate(new Date());
    setDescription('');
    setReceipt(null);
  };

  return (
    <div className="container">
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="form-control"
            required
          >
            <option value="">Select Category</option>
            <option value="Food">Food</option>
            <option value="Rent">Rent</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Date:</label>
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Attach Receipt (optional):</label>
          <input
            type="file"
            onChange={(e) => setReceipt(e.target.files[0])}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
