import React, {useState, createContext,useReducer} from 'react'

export const CartContext = createContext()

const CartContextProvider = ({children}) => {
  const products = [...Array(20)].map(() => ({
    id: faker.number.int(),
    name: faker.person.fullName(),
    price: faker.commerce.price(),
    image: faker.image.url(),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: []
  })

  return (
    <CartContext.Provider value={{products, cart, setCart}}>
        {children}
    </CartContext.Provider>)
}

export default CartContextProvider
