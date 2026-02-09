export default function Card({ title, body, clickedBtn, id }) {
  if (clickedBtn === id) {
    return (
      <div className="card">
        <div className="card-title">
          <h2>{title}</h2>
        </div>
        <div className="card-body">
          <p>{body}</p>
        </div>
      </div>
    );
  } else {
    return;
  }
}
