import styled from "styled-components"

export const Wrapper = styled.div`
   display: flex;
   align-items: center;
   border-bottom: 1px solid #DFE2E8;
   padding-left: 50px; 
`

export const StyledSpan = styled.span`
   font-size: ${({ theme }) => theme.fontSize.m};
   color: ${({ theme }) => theme.colors.darkGrey};

   &:not(:first-child){
      font-weight: bold;
      font-size: ${({ theme }) => theme.fontSize.l};
   }
`

export const StyledInput = styled.input`
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

export const StyledList = styled.ul`
   position: absolute;
   left: 50px;
   top: 55px;
   background-color: white;
   list-style: none;
   margin: 0;
   padding: 10px;
   border-radius: 20px;
   box-shadow: 0 5px 15px -10px rgb(0 0 0 / 30%);
   max-height: 400px;
   overflow-y: scroll;
   z-index: 9999;
`

export const StyledListItem = styled.li`
   padding: 20px;
   border-bottom: 1px solid #DFE2E8;
   transition: background-color .1s ease-in-out;
   background-color: white;

   &:hover{
      background-color: ${({theme}) => theme.colors.lightGrey};
   }

   button{
      font-size: 14px;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.darkGrey};
      border: none;
      background-color: white;
   }
`