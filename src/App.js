import logo from './logo.svg';
import './App.css';
import { gql } from '@apollo/client';
import React from 'react';
import Navbar from './components/Navbar';
import ContentBody from './components/ContentBody';
import styled from 'styled-components';

const query = gql`
  query getAllCategories {
    categories {
      name
      products {
        id
        name
        description
        gallery
        prices {
          currency {
            label
            symbol
          }
          amount
        }
      }
    }
  }
`;

const StyledAppBody = styled.div`
  background-color: yellow;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      selectedCategory: null,
    };
    this.selectCategory = this.selectCategory.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  selectCategory(categoryName) {
    const foundCategory = this.state.categories.find((el) => {
      return el.name === categoryName;
    });
    console.log(foundCategory);
    this.setState({
      selectedCategory: foundCategory,
    });
  }

  async fetchData() {
    const response = await this.props.client.query({
      query,
    });
    this.setState({
      categories: response.data.categories,
      selectedCategory: response.data.categories[0],
    });
  }
  componentDidMount() {
    this.fetchData();
  }
  render() {
    return (
      <StyledAppBody className="App">
        <Navbar
          categories={this.state.categories}
          selectCategory={(categoryName) => this.selectCategory(categoryName)}
        />
        <ContentBody selectedCategory={this.state.selectedCategory} />
      </StyledAppBody>
    );
  }
}

export default App;
