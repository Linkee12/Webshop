/* eslint-disable promise/always-return */
import "../styles/store.css";
import { useEffect, useState } from "react";
import Card from "./card";

type Props = {
  categoryId: number;
  show: () => void;
  setProductName: (value: string) => void;
};
export type Product = {
  id: number;
  name: string;
  catid: number;
  price: number;
  avaliable: boolean;
};
export default function Store(props: Props) {
  const [product, setProduct] = useState<Product[]>([]);
  const [navigationNumber, setNavigationNumber] = useState<number[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(0);
  useEffect(() => {
    const currentToken = localStorage.getItem("token");
    fetch("http://localhost:5173/api/getproducts", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${currentToken}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: props.categoryId, pageNumber: pageNumber }),
    })
      .then((json) => json.json())
      .then((res) => {
        setProduct(res[1]);
        const nButtonsArray = new Array(Math.floor(res[0] / -10) * -1)
          .fill(0)
          .map((_, i) => i + 1);
        setNavigationNumber(nButtonsArray);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [pageNumber]);
  return (
    <>
      <div className="productconti">
        {product.map((e) => (
          <Card
            key={e.id}
            e={e}
            show={props.show}
            setProductName={props.setProductName}
          />
        ))}
      </div>
      <div className="pageChangerContainer">
        {navigationNumber != undefined ? (
          navigationNumber.map((e, i) => (
            <button onClick={() => setPageNumber(i)} key={e} className="pageChange">
              {e}
            </button>
          ))
        ) : (
          <button key={1} onClick={() => setPageNumber(0)} className="pageChange">
            {1}
          </button>
        )}
      </div>
    </>
  );
}
