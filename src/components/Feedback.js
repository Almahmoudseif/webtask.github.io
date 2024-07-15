import React, { useState } from 'react';
import Notification from './Notification';
import './Feedback.css';

const Feedback = () => {
    const [notifications, setNotifications] = useState([]);
    const [feedbacks, setFeedbacks] = useState([]);
    const [feedbackMessage, setFeedbackMessage] = useState('');

    const handleAddNotification = (message, type) => {
        setNotifications([...notifications, { message, type }]);
    };

    const handleFeedbackSubmit = () => {
        // Simulate a successful feedback submission
        const newFeedback = {
            id: feedbacks.length + 1,
            message: feedbackMessage,
            status: 'pending'
        };
        setFeedbacks([...feedbacks, newFeedback]);
        handleAddNotification('Feedback submitted successfully!', 'success');
        setFeedbackMessage('');
    };

    const handleDeleteFeedback = (id) => {
        setFeedbacks(feedbacks.filter(feedback => feedback.id !== id));
        handleAddNotification('Feedback deleted successfully!', 'success');
    };

    const handleAcceptFeedback = (id) => {
        setFeedbacks(feedbacks.map(feedback => feedback.id === id ? { ...feedback, status: 'accepted' } : feedback));
        handleAddNotification('Feedback accepted!', 'success');
    };

    const handlePendingFeedback = (id) => {
        setFeedbacks(feedbacks.map(feedback => feedback.id === id ? { ...feedback, status: 'pending' } : feedback));
        handleAddNotification('Feedback marked as pending!', 'info');
    };

    return (
        <div className="feedback-container">
            <h3>Feedback</h3>
            <textarea 
                value={feedbackMessage} 
                onChange={(e) => setFeedbackMessage(e.target.value)} 
                placeholder="Write your feedback"
            ></textarea>
            <button onClick={handleFeedbackSubmit}>Submit Feedback</button>
            <div className="notifications">
                {notifications.map((notification, index) => (
                    <Notification key={index} message={notification.message} type={notification.type} />
                ))}
            </div>
            <div className="feedback-list">
                <h4>Submitted Feedback</h4>
                {feedbacks.map(feedback => (
                    <div key={feedback.id} className="feedback-item">
                        <p>{feedback.message}</p>
                        <p>Status: {feedback.status}</p>
                        <button onClick={() => handleAcceptFeedback(feedback.id)}>Accept</button>
                        <button onClick={() => handlePendingFeedback(feedback.id)}>Pending</button>
                        <button onClick={() => handleDeleteFeedback(feedback.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Feedback;
