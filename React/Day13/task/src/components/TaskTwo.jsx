
import { useState } from "react";

function TaskTwo() {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-3">Like Button</h2>

      <p className="mb-3">
        {isLiked ? "You liked this post!" : "You have not liked this post."}
      </p>

      <button
        className="border px-4 py-2 rounded"
        onClick={() => setIsLiked(!isLiked)}
      >
        {isLiked ? "Unlike" : "Like"}
      </button>
    </div>
  );
}

export default TaskTwo;
