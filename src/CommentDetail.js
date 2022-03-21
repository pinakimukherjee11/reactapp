import React from 'react'


const CommentDetail = (props) => {
    console.log(props);
    return (
        <div className="comment">
        <a href="/" className='avatar'>
          <img alt="avatar"  src={props.image} />
           {props.author}
        </a>
        <div className="metadata">
          <span className="date"> {props.timeAgo}</span>
          <div className="text">{props.commentDetails}</div>

        </div>
      </div>
    )

};

export default CommentDetail;
