import React, { Component } from 'react'

export class ProductItem extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      name: this.props.data.name || "Producto Medias Query"
    }
  }

  render() {
    return (
      <article>
        <h2>{this.state.name}</h2>
        <h3>{this.props.data.info}</h3>
        <p>Price: {this.props.data.price}€</p>
      </article>
    )
  }
}

export default ProductItem