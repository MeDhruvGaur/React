
import Product from "./Product.jsx";
import MsgBox from "./MsgBox.jsx";

function ProductTab() {
  let options = ["hi-tech", "durable", "fast"];
  // let options2 = { a: "hi-tech", b: "durability", c: "faster" };

  return (
    <>
      <Product title="phone" price={3000} />

      <Product title="laptop" price={40000} />

      <Product title="pen" price={1} />
    </>
  );
}

export default ProductTab;