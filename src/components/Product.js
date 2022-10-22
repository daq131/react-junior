import React from 'react';

class Product extends React.Component {
  render() {
    return (
      <>
        <div>
          <img src={this.props.product?.gallery[0]} />
          <p>{this.props.product?.name}</p>
          <p>${this.props.product?.prices[0].amount}</p>
        </div>
      </>
    );
  }
}

export default Product;
