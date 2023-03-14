export const NewComment = () => {
  return (
    <div className="new-comment-container">
      <h3>Add a new Comment: </h3>
      <textarea
        name="comment"
        id="comment"
        cols="30"
        rows="10"
        placeholder="Add a comment..."
      ></textarea>
      <button>Add</button>
    </div>
  );
};
