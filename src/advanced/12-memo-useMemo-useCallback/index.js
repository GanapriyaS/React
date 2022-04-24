import React, { useState, useCallback, useMemo } from 'react'
import { useFetch } from '../9-custom-hooks/useFetch'

// The reduce() method executes a reducer function for array element.
// The reduce() method returns a single value: the function's accumulated result.
// The reduce() method does not execute the function for empty array elements.
// The reduce() method does not change the original array.

const url = 'https://course-api.com/javascript-store-products'
// console.count("")
// every time props or state changes, component re-renders
const calculateMostExpensive = (data) => {
  return (
    data.reduce((total, item) => {
      const price = item.fields.price
      if (price >= total) {
        total = price
      }
      return total
    }, 0) / 100
  )
}
const Index = () => {
  const { products } = useFetch(url)
  const [count, setCount] = useState(0)
  const [cart, setCart] = useState(0)


  //  usecallback used because as count changes , function addToCart created newly then dependcy list of memo allows so rerender every thing
  //  this addTocart function create only when cart values changes
  const addToCart = useCallback(() => {
    setCart(cart + 1)
  }, [cart])
// React.memo looking for props , here calculatemostexpensive executes everytime click me used so usememo used only products change the usememo reruns 
  const mostExpensive = useMemo(() => calculateMostExpensive(products), [
    products,
  ])
  return (
    <>
      <h1>Count : {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h1 style={{ marginTop: '3rem' }}>cart : {cart}</h1>
      <h1>Most Expensive : ${mostExpensive}</h1>
      <BigList products={products} addToCart={addToCart} />
    </>
  )
}


//  every time click me used the page rerenders and biglist along with each 24 singlelist get rerendered so React.memo used
const BigList = React.memo(({ products, addToCart }) => {
  // useEffect(() => {
  //   console.count('hello from big list');
  // });

  return (
    <section className='products'>
      {products.map((product) => {
        return (
          <SingleProduct
            key={product.id}
            {...product}
            addToCart={addToCart}
          ></SingleProduct>
        )
      })}
    </section>
  )
})

const SingleProduct = ({ fields, addToCart }) => {
  let { name, price } = fields
  price = price / 100
  const image = fields.image[0].url

  // useEffect(() => {
  //   console.count('hello from product');
  // });
  return (
    <article className='product'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={addToCart}>add to cart</button>
    </article>
  )
}
export default Index
