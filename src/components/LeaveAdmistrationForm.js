import React, { useState } from 'react';
import './LeaveAdministrationForm.css';

const LeaveAdministrationForm = () => {
  const [formData, setFormData] = useState({
    user: '',
    status: '',
    reason: '',
    fromDate: '',
    toDate: '',
    totalDays: 0,
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const calculateTotalDays = () => {
    const fromDate = new Date(formData.fromDate);
    const toDate = new Date(formData.toDate);
    const timeDifference = toDate.getTime() - fromDate.getTime();
    const daysDifference = timeDifference / (1000 * 3600 * 24);
    setFormData({
      ...formData,
      totalDays: daysDifference
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // You can add further submission logic here (e.g., send to a server)
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="user">Select User:</label>
        <select
          id="user"
          name="user"
          value={formData.user}
          onChange={handleChange}
          required
        >
          <option value="">Select User</option>
          <option value="user1">User 1</option>
          <option value="user2">User 2</option>
          {/* Add more users as needed */}
        </select>
      </div>
      <div>
        <label htmlFor="status">Select Status:</label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          required
        >
          <option value="">Select Status</option>
          <option value="approved">Approved</option>
          <option value="pending">Pending</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>
      <div>
        <label htmlFor="reason">Reason for Leave:</label>
        <input
          type="text"
          id="reason"
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="fromDate">From Date:</label>
        <input
          type="date"
          id="fromDate"
          name="fromDate"
          value={formData.fromDate}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="toDate">To Date:</label>
        <input
          type="date"
          id="toDate"
          name="toDate"
          value={formData.toDate}
          onChange={handleChange}
          required
          onBlur={calculateTotalDays}
        />
      </div>
      <div>
        <label htmlFor="totalDays">Total Days:</label>
        <input
          type="number"
          id="totalDays"
          name="totalDays"
          value={formData.totalDays}
          readOnly
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LeaveAdministrationForm;
