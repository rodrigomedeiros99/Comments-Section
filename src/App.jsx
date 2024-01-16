import { useState } from "react";

function App() {
  const [author, setAuthor] = useState(" ");
  const [content, setContent] = useState(" ");
  const [comments, setComments] = useState([]);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const newComment = {
      id: Math.floor(Math.random() * 100000),
      author: author,
      content: content,
      createdAt: new Date(),
    };
    setComments((state) => [newComment, ...state]);
    console.log(newComment);
    setAuthor(" ");
    setContent(" ");
  };
  return (
    <div className="app">
      <h1>Comments Section</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Author">Email </label>
        <input
          value={author}
          onChange={(ev) => setAuthor(ev.target.value)}
          placeholder="email@exemple.com"
          type="email"
          id="author"
          required
        />
        <label htmlFor="content">Comment</label>
        <textarea
          placeholder="Leave your comment"
          value={content}
          onChange={(ev) => setContent(ev.target.value)}
          id="content"
          cols="30"
          rows="6"
          required
        ></textarea>
        <button id="send-btn" type="submit">
          Send Comment
        </button>
      </form>
      <hr />
      <section id="comments">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id}>
              <h3>{comment.author}</h3>
              <span>At {comment.createdAt.toLocaleString()}</span>
              <p>{comment.content}</p>
              <hr />
            </div>
          ))
        ) : (
          <p>Be the first to comment.</p>
        )}
      </section>
    </div>
  );
}

export default App;
