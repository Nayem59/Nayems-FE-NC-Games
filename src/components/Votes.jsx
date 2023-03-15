import { useState } from "react";
import { patchReview } from "../api/api";

export const Votes = ({ votes, setVotes, review_id }) => {
  const [err, setErr] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);

  const handleUp = () => {
    setVotes((currVotes) => currVotes + 1);
    setHasVoted(true);
    setErr(null);

    patchReview(review_id, {
      inc_votes: 1,
    }).catch(() => {
      setVotes((currVotes) => currVotes - 1);
      setErr("oops we got some connection issues, sorry...");
    });
  };

  const handleDown = () => {
    setVotes((currVotes) => currVotes - 1);
    setHasVoted(false);
    setErr(null);

    patchReview(review_id, {
      inc_votes: -1,
    }).catch(() => {
      setVotes((currVotes) => currVotes + 1);
      setErr("oops we got some connection issues, sorry...");
    });
  };

  return (
    <div className="votes-container">
      <h3>Votes: {votes}</h3>
      {err ? <p>{err}</p> : null}
      <button onClick={handleUp} disabled={hasVoted}>
        +
      </button>
      <button onClick={handleDown} disabled={!hasVoted}>
        -
      </button>
    </div>
  );
};
