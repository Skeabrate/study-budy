import styled from "styled-components"
import ReactModal from 'react-modal'

export const ModalWrapper = styled(ReactModal)`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   display: flex;
   flex-direction: column;
   padding: 30px 50px 10px;
   background-color: ${({theme}) => theme.colors.white};
   border-radius: 15px;
   box-shadow: 0px -5px 25px -10px rgba(0, 0, 0, .3);
   max-width: 600px;

   color: ${({ theme }) => theme.colors.darkGrey};

   &:focus{
      outline: none;
   }
`

export const StyledTitleWrapper = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 5vw;
`

export const StyledClassWraper = styled.div`
   max-width: 50%;
   margin-bottom: 150px;
`

export const StyledClassItem = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   font-size: 14px;

   &:first-child{
      margin-top: 0;
   }
`