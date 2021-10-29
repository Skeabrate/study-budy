import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
   display: flex;
   align-items: center;
   border-bottom: 1px solid #DFE2E8;
   padding-left: 50px; 
`

const StyledSpan = styled.span`
   font-size: ${({ theme }) => theme.fontSize.m};
   color: ${({ theme }) => theme.colors.darkGrey};

   &:not(:first-child){
      font-weight: bold;
      font-size: ${({ theme }) => theme.fontSize.l};
   }
`

const StyledInput = styled.input`
   width: 30vw;
   margin-left: 50px;
   border: none;
   padding: 15px 30px;
   border-radius: 30px;
   box-shadow: 0 5px 15px -10px rgb(0 0 0 / 30%);

   ::placeholder {
      color: ${({ theme }) => theme.colors.grey}
   }

   &:focus{
      outline: none;
      box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
   }
`

const SearchInput = () => {
   return (
      <Wrapper>
         <label>
            <StyledSpan> Logged as: </StyledSpan> 
            <br /> 
            <StyledSpan>Teacher</StyledSpan>
         </label>
         
         <StyledInput placeholder='find student'/>         
      </Wrapper>
   );
};

export default SearchInput;