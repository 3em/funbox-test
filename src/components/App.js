import React, {Component} from 'react';
import {createGlobalStyle} from 'styled-components'
import reset from 'styled-reset';
import IndexPage from './IndexPage/IndexPage'
import {styleCommon}  from '../assets/css/style-common';

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${styleCommon} 
`;

class App extends Component {
  
  render() {
    return (
      <div className='b-body-wrapper'>
        <GlobalStyle/>
        <IndexPage />
      </div>
  )
    ;
  }
}

export default App;