import { css } from 'styled-components';
import bgPattern from '../img/bg-pattern.svg';
import {fontText, fontTitle, regularFontSize, regularLineHeight} from './style-variables';

import Exo_eot from '../fonts/Exo2.0-Thin.eot';
import Exo_svg from "../fonts/Exo2.0-Thin.svg";
import Exo_woff from '../fonts/Exo2.0-Thin.woff';
import Exo_woff2 from '../fonts/Exo2.0-Thin.woff2'

export const styleCommon = css`
  @font-face {
    font-family: 'Exo2.0-Thin';
    src: url(${Exo_eot});
    src: url(${Exo_eot}?#iefix) format('embedded-opentype'),
         url(${Exo_svg}#Exo2.0-Thin) format('svg'),
         url(${Exo_woff}) format('woff'),
         url(${Exo_woff2}) format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  html{
    height: 100%;
  }

  body{
    background: url(${bgPattern});
    font-family: '${fontText}';
    font-size: ${regularFontSize};
    line-height: ${regularLineHeight};
    color: #fff;
    min-height: 100%;
    height: 100%;
    position: relative;

    &:before{
      content: "";
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: .5;
      
      /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#000000+0,000000+50,000000+100&1+0,0+50,1+100 */
      background: -moz-linear-gradient(top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 100%); /* FF3.6-15 */
      background: -webkit-linear-gradient(top, rgba(0,0,0,1) 0%,rgba(0,0,0,0) 50%,rgba(0,0,0,1) 100%); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(to bottom, rgba(0,0,0,1) 0%,rgba(0,0,0,0) 50%,rgba(0,0,0,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#000000',GradientType=0 ); /* IE6-9 */
    }
  } 
  
  h1 {
    font-size: 36px;
    line-height: 44px;
    text-align: center;
    margin-bottom: 24px;
    font-family: '${fontTitle}', '${fontText}';
    
    @media (max-width: 767px) {
      margin: 0 20px 24px;
    }
  }
  
  #app,
  .b-body-wrapper{
    height: 100%;  
  }

    
`;