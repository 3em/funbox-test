import styled, {css} from 'styled-components';
import {
  colorBlue,
  colorBlue_hover,
  colorRed,
  colorRed_hover,
  disabledColor,
  disabledColor_opacity5,
  yellowColor
} from '../../assets/css/style-variables'

const heightCard = '480px';

export const CardsItemsList = styled.ul`
  position: relative;
  text-align: center;
  font-size: 0;
  line-height: 0;
`;

export const CardItemLi = styled.li`
  position: relative;
  display: inline-block;
  width: 320px;
  margin: 0 40px;
  font-size: 13px;
  line-height: 15px;
  padding-top: ${heightCard};
  padding-bottom: 50px;
  
  @media (max-width: 767px) {
    display: block;
    margin: auto;
  }
`;

export const CardLink = styled.a`
  display: block;
  height: 100%;
  text-decoration: none;
  color: #000;
  
  &.disabled {
    cursor: default;
  }
`;

export const CardLinkBottomText = styled.span`
  color: #fff;
  text-align: center;
  font-size: 13px;
  line-height: 15px;
  display: block;
  margin-top: 15px;
  transition: color .25s;
  
  ${CardLink}.allow-hover:hover:not(.disabled) & {
    span{
      color: ${colorBlue_hover};
      span{
        border-bottom-color: ${colorBlue_hover};
      }
    }
    
  }
  
  ${CardLink}.disabled & {
    color: ${yellowColor};
  }
  
  span{
    color: ${colorBlue};
    font-size: 50%;
    
    span{
      font-size: 200%;
      padding: 0.3em 0 0;
      border-bottom: 1px dashed ${colorBlue};
      transition: border-color .25s;
    }
  }
`;

export const CardPicBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: ${heightCard};
  border: 4px solid ${colorBlue};
  clip-path: polygon(13.5% 0%, 100% 0, 100% 100%, 0 100%, 0 9%);
  border-radius: 12px;
  overflow: hidden;
  box-sizing: border-box;
  background: #fff;
  padding: 17px 12px 0 44px;
  text-align: left;
  transition: border-color .25s, background .25s, color .25s;
  backface-visibility: hidden;
  
  ${CardLink}.allow-hover:hover:not(.disabled) &{
    border-color: ${colorBlue_hover};
    
    &:before{
      background: ${colorBlue_hover};
    }
  }
  
  ${CardLink}.active & {
    border-color: ${colorRed};
    
    &:before{
      background: ${colorRed};
    }
  }
  
  ${CardLink}.active.allow-hover:hover:not(.disabled) & {
    border-color: ${colorRed_hover};
    
    &:before{
      background: ${colorRed_hover};
    }
  }
  
  ${CardLink}.disabled & {
    border-color: ${disabledColor};
    background: #F2F2F2;
    color: ${disabledColor_opacity5};
    
    &:before{
      background: ${disabledColor};
    }
  }
  
  * {
    position: relative;
    z-index: 2;
  }
  
  &:before{
    content: "";
    position: absolute;
    margin-bottom: 1px;
    bottom: 91%;
    left: 0;
    height: 5px;
    background: ${colorBlue};
    width: 100%;   
    transform: rotate(-45deg);
    transform-origin: left bottom;
    transition: background-color .25s;
  }
  
  h3{
    font-size: 48px;
    line-height: 56px;
    font-weight: bold;
    margin-left: -1%;
    margin-top: 5px;
    
    span{
      display: block;
      font-size: 24px;
      line-height: 24px;
      margin-left: 1%;
    }
  }
`;

export const CardPicBlock_wight = styled.div`
  position: absolute;
  bottom: 12px;
  right: 12px;
  width: 80px;
  height: 80px;
  color: #fff;
  text-align: center;
  border-radius: 50%;
  background: ${colorBlue};
  font-size: 42px;
  line-height: 42px;
  padding-top: 3px;
  transition: background .25s;
  backface-visibility: hidden;
  
  ${CardLink}.allow-hover:hover:not(.disabled) &{
    background: ${colorBlue_hover};
  }
  
  ${CardLink}.active & {
    background: ${colorRed};
  }
  
  ${CardLink}.active.allow-hover:hover:not(.disabled) & {
    background: ${colorRed_hover};
  }
  
  ${CardLink}.disabled & {
    background: ${disabledColor};
   }
  
  div{
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  
  span{
    display: block;
    font-size: 21px;
    line-height: 21px;
    margin-top: -2px;
  }
`;

export const CardPicStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: 100% auto;
  background-position: left bottom;
  background-repeat: no-repeat;
  
  ${CardLink}.disabled & {
    opacity: .5;
  }
`;

export const CardPicBlock_preTitle = styled.span`
  font-size: 16px;
  line-height: 19px;
  color: #666;
  
  ${CardLink}.active.allow-hover:hover:not(.disabled) & {
    color: ${colorRed_hover};
  }
  
  ${CardLink}.disabled & {
    color: ${disabledColor_opacity5};
  }
`;

export const CardPicBlock_portion = styled.span`
  font-size: 14px;
  line-height: 16px;
  color: #666;
  display: block;
  margin-top: 17px;
  
  ${CardLink}.disabled & {
    color: ${disabledColor_opacity5};
  }  
`;
