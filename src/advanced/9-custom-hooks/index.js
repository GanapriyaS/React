import React from 'react'
import { useFetch } from './useFetch'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'

const Example = () => {
  const { loading, products } = useFetch(url)
  console.log(products)
  return (
    <div>
      <h2>{loading ? 'loading...' : products[0].fields.name}</h2>
    </div>
  )
}

export default Example
