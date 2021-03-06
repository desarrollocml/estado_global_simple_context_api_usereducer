const types = {
  authLogin: "auth - login",
  authLogout: "auth - logout",
  productDeleteAll: "product delete all",
  productChange: "product - change",
};

const initialStore = {
  user: { id: 1, name: "Luis" },
  products: [
    { id: 1, title: "Product #1" },
    { id: 2, title: "Product #2" },
  ],
};

export default function StoreReducer(state, action) {
  switch (action.type) {
    case types.authLogout:
      return {
        ...state,
        user: null,
      };
    case types.authLogin:
      //console.log("--->",action.payload)
      return {
        ...state,
        user: action.payload,
      };
    case types.productDeleteAll:
        return{
            ...state,
            products:[]
        }  
    case types.productChange:
        return{
            ...state,
            products:[{id:3, title: "Product #3"}]
        }  
    default:
      return state;
  }

  // return <div>StoreReducer</div>;
}
export { initialStore, types };
