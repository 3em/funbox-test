import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import { CardsItemsList, CardItemLi } from './style'

class CardsList extends Component {
  static propTypes = {
    products: PropTypes.array.isRequired,
  };

  render() {
    const { products } = this.props;

    const cardItem = products.map(product => {
      return (product) ? <CardItemLi key={product.id}><Card {...product} /></CardItemLi> : null;
    });


    return (
      <CardsItemsList>
        {cardItem}
      </CardsItemsList>
    );
  }
}

export default CardsList;