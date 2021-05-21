import React from 'react';
import Review from './review.jsx';
import moment from 'moment';

const Featured = (props) => (
  <div>
    {/* {console.log('Props in Featured:', props)} */}
    {props.review && props.review.reviewer &&
      <div>
        <h2>Featured review</h2>
        <div className="reviewerAvatar">
          {/* if the reviewer has no avatar, the default avatar consists of reviewer's initials */}
          {props.review.reviewer.picture === null ? <div>{props.review.reviewer.name.split(' ').map((n)=>n[0]).join('').slice(0, 2)}</div> : <img src={props.review.reviewer.picture}></img>}
        </div>
        <div className="reviewerName">{props.review.reviewer.name}</div>
        <div className="reviewerCoursesTaken">{props.review.reviewer.coursesTaken} courses</div>
        <div className="reviewerReviews">{props.review.reviewer.reviews} reviews</div>
        <div className="reviewRating">{props.review.rating}</div>
        <div className="reviewDate">{moment(props.review.createdAt).fromNow()}</div>
        <div className="reviewComment">{props.review.comment}</div>
        <p>Was this review helpful?</p>
        <button className="thumbs-up">[thumbs-up]</button>
        <button className="thumbs-down">[thumbs-down]</button>
        <button className="report">Report</button>
      </div>
    }
  </div>
);

export default Featured;