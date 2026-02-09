export default function Button({ items }) {
  return items.map((items) => (
    <button key={items.id} type="button" className="btn btn-primary m-2">
      {items.title}
    </button>
  ));
}
