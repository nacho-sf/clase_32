import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';

import ProductItem from './ProductItem'

export class ProductList extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      products:[
        {name:"Tigre de Bengala",info:"Botella Moet con Bengala",price:20},
        {name:"Corona party",info:"Cubo de 5 coronitas",price:10},
        {info:"Botella de absenta con agua",price:40}
      ]
    }
  }

  paintProducts = () => this.state.products.map((product, i) => <ProductItem data={product} key={uuidv4()}/>)

  // paintProducts = () {return this.state.products.map(product => <ProductItem data={product}/>)}

  render() {

  /*  const products = [
        {name:"Tigre de Bengala",info:"Botella Moet con Bengala",price:20},
        {name:"Corona party",info:"Cubo de 5 coronitas",price:10},
        {info:"Botella de absenta con agua",price:40}
      ]
  */

    return (
      <section>
        {this.paintProducts()}

        {/*products.map(product => <ProductItem data={product}/>)*/}

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