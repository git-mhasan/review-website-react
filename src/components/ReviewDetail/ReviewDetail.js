import React from 'react';

const ReviewDetail = ({ name, date, comments, imageUrl, rating }) => {
    return (
        <div className='review-details'>
            <p>{rating}/5.0</p>
        </div>
    );
};

export default ReviewDetail;