export default function Card({ items }) {
  return items.map((items) => {
    return (
      <div key={items.id} className="card">
        <div className="card-title">
          <h2>{items.title}</h2>
        </div>
        <div className="card-body">
          <p>{items.description}</p>
        </div>
      </div>
    );
  });
}
