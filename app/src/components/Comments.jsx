// import { useEffect, useState } from "react";
// import { getComments } from "../api/api";

// export const Comments = ({ review, review_id }) => {
//   const [comments, setComments] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   console.log(comments);

//   useEffect(() => {
//     setIsLoading(true);
//     getComments(review_id).then((comments) => {
//       setComments(comments);
//       setIsLoading(false);
//     });
//   }, [review_id]);

//   if (isLoading) {
//     return <h2>Loading...</h2>;
//   }

//   return (
//     <div className="comments-container">
//       <h3>{review.comment_count} comments:</h3>
//       <ul>
//         {comments.map((comment) => {
//           return (
//             <li>
//               <p>Author: {comment.author}</p>
//               <p>{comment.body}</p>
//               <p>Comment made on: {comment.created_at}</p>
//               <div className="votes-container">
//                 <h3>Votes: {comment.votes}</h3>
//                 <button>Vote</button>
//               </div>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };
