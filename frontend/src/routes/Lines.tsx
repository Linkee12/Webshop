import type { LineItems } from "./basket";

export type Line = {
  lineItem: LineItems;
  key: number;
  modifyPiece: (lineItemId: number, modifier: number) => void;
  lineItems: LineItems[];
  setLineItems: (lineItems: LineItems[]) => void;
};
export default function Lines(props: Line) {
  return (
    <div className="basketLines" key={props.lineItem.product.id}>
      <img
        src={`../src/images/category/${props.lineItem.product.catid}/${props.lineItem.product.id}.jpg`}
        alt={props.lineItem.product.name}
        className="lineImages"
      />
      <div className="name">{props.lineItem.product.name}</div>
      <button
        className="deleteButton"
        onClick={() => {
          props.modifyPiece(props.lineItem.product.id, 1);
        }}
      >
        <span className="material-symbols-outlined">add</span>
      </button>
      <button
        className="deleteButton"
        onClick={() => {
          if (props.lineItem.qty > 1) {
            props.modifyPiece(props.lineItem.product.id, -1);
          }
        }}
      >
        <span className="material-symbols-outlined">remove</span>
      </button>

      <div className="darab">{props.lineItem.qty} pcs</div>
      <div className="price">
        {(props.lineItem.product.price * props.lineItem.qty).toLocaleString()} Ft
      </div>
      <button
        key={props.lineItem.product.id}
        className="deleteButton"
        onClick={() => {
          localStorage.setItem(
            "itemIdInBasket",
            JSON.stringify(
              props.lineItems
                .filter((i) => i.product.id != props.lineItem.product.id)
                .map((e) => e.product.id),
            ),
          );
          props.setLineItems(
            props.lineItems.filter((i) => i.product.id != props.lineItem.product.id),
          );
        }}
      >
        <span className="material-symbols-outlined">delete</span>
      </button>
    </div>
  );
}
