import React from 'react';

const ReviewCard = ({ review }) => {
    const { name, date, comments, imageUrl, rating } = review;

    return (
        <div className='review-details border border-gray-400 m-8 shadow-lg  w-lg-40'>
            <div className='flex m-8'>
                <img className='detail-rev-pic' src={imageUrl} alt="" />
                <div className='align-middle'>
                    <h3 className='mx-8 text-left text-xl font-bold'> {name}</h3>
                    <p className='mx-8 my-2 text-left'>{rating} out of 5.0  ● <span className='text-gray-400'>{date}</span></p>
                </div>
            </div>
            <p className='text-justify mx-8 mb-8'>{comments?.length > 100 ? comments?.slice(0, 100) + "..." : comments}</p>
        </div>
    );
};

export default ReviewCard;