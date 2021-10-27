import styled from "styled-components";

export const StyledButton = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: ${ ({ theme }) => theme.colors.grey};
   border-radius: 100%;
   width: 25px;
   height: 25px;
   border: none;
   color: white;
   cursor: pointer;

   svg{
      /* stroke: white; wypelnienie SVG, albo fill: 'color' */
      width: 100%;
      height: 100%;
   }
`;