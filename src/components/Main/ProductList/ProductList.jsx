import React, { Component } from 'react'
import ProductItem from './ProductItem/ProductItem'

export class ProductList extends Component {
  render() {

    const products = [
      {name:"Tigre de Bengala",info:"Botella Moet con Bengala",price:20},
      {name:"Corona party",info:"Cubo de 5 coronitas",price:10},
      {info:"Botella de absenta con agua",price:40}
  ];
    return (
      <section>
        {products.map(product => <ProductItem data={product}/>)}

        {/*<ProductItem data = {products[0]}/>
        <ProductItem data = {products[1]}/>
        <ProductItem data = {products[2]}/>*/}

        {/*<ProductItem name={"Tigre de Bengala"} info={"Botella Moet con Bengala"} price={20}/>
        <ProductItem name={"Corona party"} info={"Cubo de 5 Coronitas"} price={10}/>
        <ProductItem info={"Botella de absenta con agua"} price={40}/>*/}
      </section>
    )
  }
}

export default ProductList