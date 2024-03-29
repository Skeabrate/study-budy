import styled from "styled-components";

export const StyledAddButton = styled.button`
   max-width: fit-content;
   margin: 15px 0;
   padding: 7px 20px;
   font-size: ${({ theme }) => theme.fontSize.s};
   background-color: ${({ theme }) => theme.colors.lightPurple};
   border-radius: 20px;
   border: none;  
   font-weight: bold;
   color: ${({ theme }) => theme.colors.darkGrey};
`