import React from 'react';
import './ProfilePage.css';

export default function ProfilePage() {
    const user = {
        name: "Christine Jeong",
        rating: 4.8,
        email: 'jeongc@usc.edu',
        phone: '917-636-3863',
        posts: [
            { id: 1, title: "Cute Cat Lamp", date: "2025-04-01" },
            { id: 2, title: "Transparent Plastic Container 3x3", date: "2025-03-10" },
            { id: 3, title: "Dyson Vacuum", date: "2025-02-18" },
            { id: 4, title: "Pink Microwave", date: "2025-01-11" }
        ]
    };

    let postHistoryContent;

    if (user.posts.length > 0) {
        postHistoryContent = (
            <ul className="post-history-list">
                {user.posts.map((post) => (
                    <li key={post.id} className="post-history-item d-flex justify-content-between align-items-center">
                        <span>{post.title}</span>
                        <small className="text-muted">{new Date(post.date).toLocaleDateString()}</small>
                    </li>
                ))}
            </ul>
        );
    }
    else {
        postHistoryContent = <p>You haven't posted anything yet.</p>;
    }

    return (
        <div className="container mt-5 profile-container">
            <div className="profile-header text-center">
                <div className="profile-picture"></div>
                <h2 className="profile-name">{user.name}</h2>
                <p className="profile-rating">☆ {user.rating}</p>
                <p className="profile-rating">{user.email}</p>
                <p className='profile-rating'>{user.phone}</p>
                <button className="btn btn-primary create-post-btn">Create a Post</button>
            </div>

            <div className="history-section mt-5">
                <h3 className="history-title">Your Post History</h3>
                {postHistoryContent}
            </div>
        </div>
    );
}