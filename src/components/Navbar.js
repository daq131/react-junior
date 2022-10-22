import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <div>
        {this.props.categories.map((category) => {
          return (
            <div
              onClick={() => this.props.selectCategory(category.name)}
              key={category.name}
            >
              {' '}
              {category.name}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Navbar;
