import styled from 'styled-components';

export const StyledList = styled.ul`
   padding: 0;
`;

export const StyledDashboard = styled.div`
   display: flex;
   flex-direction: column;
   margin-left: 50px;
   width: 100%;
`

export const StyledGroupsNav = styled.nav`
   display: flex;
   align-items: center;

   a{
      display: flex;
      font-size: 14px;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.darkGrey};
      font-weight: bold;
      background-color: ${({theme}) => theme.colors.white};
      padding: 5px;
      border-radius: 50%;
      width: 25px;
      height: 25px;
      margin: 5px;
      box-shadow: 0 5px 15px -10px rgb(0 0 0 / 30%);
   }

   a:nth-child(2){
      margin-left: 20px;
   }
`