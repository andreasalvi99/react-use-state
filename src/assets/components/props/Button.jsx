export default function Button({ id, title, clickedBtn }) {
  console.log(clickedBtn);

  return (
    <button
      type="button"
      className={
        "btn m-2 " + (id == clickedBtn ? " btn-success " : " btn-primary ")
      }
    >
      {title}
    </button>
  );
}
