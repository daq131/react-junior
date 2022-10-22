import React from 'react';
import Product from './Product';

class ProductList extends React.Component {
  render() {
    return (
      <div>
        {this.props.products
          ? this.props.products
              .filter((el) => {
                return el.prices.length > 0;
              })
              .map((product) => {
                // console.log(product.prices);
                return <Product key={product.id} product={product} />;
              })
          : 'Loading'}
      </div>
    );
  }
}

export default ProductList;
