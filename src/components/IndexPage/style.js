import styled from 'styled-components';


export const IndexContainer = styled.div`
  position: relative;
  text-align: center;
  height: 100%;
  box-sizing: border-box;
  padding-top: 20px;
  
  :before {
    content: '\\200B';
    display: inline-block;
    height: 100%; 
    vertical-align: middle;
   }
   
  @media (max-width: 767px) {
    &:before{
      height: auto;
    }
  }
`;

export const CenteredIndexContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
`;