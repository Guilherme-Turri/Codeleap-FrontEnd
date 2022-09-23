import React from 'react';

const DatePost = ({ date }) => {
  function getTime(date) {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed).toISOString().slice(0, 10);
    const formDate = date.slice(0, 10);

    const diffInMs = new Date(today) - new Date(formDate);
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

    if (diffInDays < 1) {
      return 'today';
    } else if (diffInDays === 1) {
      return 'yesterday';
    } else if (diffInDays === 1) {
      return 'two days ago';
    } else return 'more than two days ago';
  }
  const showDate = getTime(date);

  return <div>{showDate}</div>;
};

export default DatePost;
