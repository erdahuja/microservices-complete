import React from 'react';

export default ({ comments }) => {
  const renderedComments = comments.map(comment => {
    let content;
    let color;
    if (comment.status === 'approved') {
      content = comment.content;
      color = "green";
    }

    if (comment.status === 'pending') {
      content = 'This comment is awaiting moderation';
      color = "yellow"
    }

    if (comment.status === 'rejected') {
      content = 'This comment has been rejected';
      color = "red"
    }

    return <li key={comment.id} style={{ color }}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};
