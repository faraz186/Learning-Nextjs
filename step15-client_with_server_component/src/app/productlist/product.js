export default function Product({ price }) {
  return (
    <div>
      <button onClick={() => alert(price)}>Click Me</button>
    </div>
  );
}
