import React from "react";

const initialStore = {
  user: { id: 1, name: "Product #1" },
  products: [
    { id: 1, title: "Product #1" },
    { id: 2, title: "Product #2" },
  ],
};

export default function StoreReducer(state, action) {
  switch (action.type) {
    default:
      return state;
  }

 // return <div>StoreReducer</div>;
}
export { initialStore };
