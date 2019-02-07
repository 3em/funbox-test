import React, {Component} from 'react';
import {IndexContainer, CenteredIndexContainer} from './style'
import CardsList from '../cards/CardsList';
import {products} from '../../assets/data';

class IndexPage extends Component {
  render() {
    return (
      <IndexContainer>
        <CenteredIndexContainer>
          <h1>Ты сегодня покормил кота?</h1>
          <CardsList products={products} />
        </CenteredIndexContainer>
      </IndexContainer>
    );
  }
}

export default IndexPage;