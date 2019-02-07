import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {
  CardLink,
  CardLinkBottomText,
  CardPicBlock,
  CardPicStyles,
  CardPicBlock_wight,
  CardPicBlock_preTitle,
  CardPicBlock_portion
} from './style'
import styled from "styled-components";
import {declension} from  '../../assets/helpers';
import classNames from 'classnames';

class Card extends Component {
  static propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    portion: PropTypes.number,
    text: PropTypes.string,
    image: PropTypes.string,
    disabled: PropTypes.bool,
    weight: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  };

  state = {
    active: false,
    presentAmount: null,
    hovered: false,
    allowHover: true
  };

  render() {

    const {active, hovered, allowHover} = this.state;
    const {title, text, portion, image, disabled, weight } = this.props;

    const CardPic = styled.div`
      ${CardPicStyles};
      background-image: url(${image});
    `;

    const cardStateClasses = classNames({
      'active': active,
      'disabled': disabled,
      'allow-hover': allowHover
    });

    const preTitleText = (active && hovered && allowHover) ? 'Котэ не одобряет?' : 'Сказочное заморское яство';

    /**
     * get text under the card,
     * depends of active state and disabled status
     * @returns {string|*|Card.props.text}
     */
    const currentText = () => {
      let newText = '';

      if (!disabled && !active){
        newText = <Fragment>Чего сидишь? Порадуй котэ, <span><span>купи</span>.</span></Fragment>;
      } else if (!disabled && active){
        newText = text;
      } else {
        newText = 'Печалька, '+title+' закончился.';
      }

      return newText;
    };

    /**
     * get Portion card text
     * @returns {*}
     */
    const getPortionText = () => {
      let text;
      let presentAmount = 'мышь в подарок';

      if (!portion){
        return null;
      } else {

        if (portion >= 40 && portion < 80 ){
          presentAmount = '2 мыши в подарок';
        } else if (portion >= 80){
          presentAmount = '5 мышей в подарок';
        }

        text = portion +' '+ declension(portion, 'порция', 'порции', 'порций');
        return <CardPicBlock_portion>{text}<br />{presentAmount}</CardPicBlock_portion>;
      }
    };



    return (
      <CardLink onClick={this.cardActivation} onMouseEnter={this.onMouseEnterCard} onMouseLeave={this.onMouseLeaveCard} href="#" className={cardStateClasses}>

        <CardPicBlock>
          <CardPic />
          <CardPicBlock_preTitle>
            {preTitleText}
          </CardPicBlock_preTitle>
          <h3>Нямушка <span>{title}</span></h3>
          {getPortionText()}
          <CardPicBlock_wight>
            <div>
              {weight} <span>кг</span>
            </div>
          </CardPicBlock_wight>
        </CardPicBlock>

        <CardLinkBottomText>
          {currentText()}
        </CardLinkBottomText>

      </CardLink>
    );
  }

  /**
   * product active state
   * @param ev
   */
  cardActivation = ev => {
    ev.preventDefault();

    if (!this.props.disabled)
      this.setState({
        active: !this.state.active,
        allowHover: false
      });
  };

  /**
   * set hovered state true
   */
  onMouseEnterCard = () =>{
    this.setState({
      hovered: !this.state.hovered
    });
  };

  /**
   * set hovered state false
   * set allowHover state, depends on active state
   */
  onMouseLeaveCard = () => {
    const {allowHover, active} = this.state;

    this.setState({
      hovered: !this.state.hovered
    });

    if (!allowHover){
      this.setState({
        allowHover: true
      })
    }
  }


}

export default Card;