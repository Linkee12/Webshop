import type { Product } from "./store";
type Props = {
  key: number;
  e: Product;
  show: () => void;
  setProductName: (value: string) => void;
};
export default function Card(props: Props) {
  return (
    <div className="products" key={props.e.id}>
      <img
        className="produceImages"
        src={`/images/category/${props.e.catid}/${props.e.id}.jpg`}
        alt={props.e.name}
      ></img>
      <pre>
        {`${props.e.name} \nPrice:${props.e.price.toLocaleString()} Ft \n`}
        <div className="storeconti">
          Avaliable:
          <div
            style={{
              backgroundColor: props.e.avaliable ? "green" : "red",
              width: "10px",
              height: "10px",
              borderRadius: "5px",
            }}
          ></div>
        </div>
      </pre>
      <button
        className="basket"
        onClick={() => {
          putInBasket(props.e.id);
          props.show();
          props.setProductName(props.e.name);
        }}
      >
        <span className="material-symbols-outlined">add_shopping_cart</span>
      </button>
    </div>
  );
}

function putInBasket(id: number) {
  let products = localStorage.getItem("itemIdInBasket");
  if (products === null) {
    localStorage.setItem("itemIdInBasket", JSON.stringify([id]));
  } else {
    const prod = JSON.parse(products);
    if (prod != null) {
      products = JSON.parse(products);
      const arr = [...prod, id];
      localStorage.setItem("itemIdInBasket", JSON.stringify(arr));
    } else {
      console.log("empty lst");
    }
  }
}
