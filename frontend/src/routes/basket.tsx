import "../styles/basket.css";
import { useEffect, useState } from "react";
import { Product } from "./store";
import Lines from "./Lines";

export type LineItems = {
  product: Product;
  qty: number;
};

export default function Basket() {
  const [lineItems, setLineItems] = useState<LineItems[]>([]);
  const [storedItems, setStoredItems] = useState([]);
  const currentToken = localStorage.getItem("token");
  useEffect(() => {
    const item = localStorage.getItem("itemIdInBasket");
    item ? setStoredItems(JSON.parse(item)) : [];
  }, []);
  useEffect(() => {
    const newArray = [...new Set(storedItems)];

    fetch("http://localhost:5173/api/basket", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${currentToken}`,
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(newArray),
    })
      .then((json) => json.json())
      .then((data) => setLineItems(data.map((p: object) => ({ product: p, qty: 1 }))))
      .catch((err) => console.error(err));
  }, [storedItems]);

  const sum: number = lineItems
    .map((s) => s.product.price * s.qty)
    .reduce((acc, price) => acc + price, 0);

  function modifyPiece(lineItemId: number, modifier: number) {
    setLineItems(
      lineItems.map((m) =>
        lineItemId == m.product.id ? { product: m.product, qty: m.qty + modifier } : m,
      ),
    );
  }
  if (lineItems.length > 0) {
    return (
      <>
        <div>
          {lineItems.map((lineItem) => {
            return (
              <Lines
                lineItem={lineItem}
                key={lineItem.product.id}
                modifyPiece={modifyPiece}
                lineItems={lineItems}
                setLineItems={setLineItems}
              />
            );
          })}
        </div>
        <div className="basketLinesAll">
          <div style={{ paddingTop: "0.4rem" }}> All: {sum.toLocaleString()} Ft </div>{" "}
          <button className="buyButton">Buy</button>
        </div>
      </>
    );
  } else {
    return <div className="basketLines">Your basket is empty</div>;
  }
}
