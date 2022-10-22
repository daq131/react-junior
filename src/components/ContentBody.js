import React from 'react';
import ProductList from './ProductList';

class ContentBody extends React.Component {
  render() {
    return (
      <div>
        <h2>
          {this.props.selectedCategory
            ? this.props.selectedCategory.name
            : 'Loading'}
        </h2>
        <ProductList products={this.props.selectedCategory?.products} />
      </div>
    );
  }
}

export default ContentBody;
