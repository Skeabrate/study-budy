import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.nav`
   height: 100vh;
   border-right: 1px solid #DFE2E8;
`

export const StyledNav = styled.ul`
   padding: 0;
   margin-top: 60px;
   margin-right: 25px;
   list-style: none;
   text-align: right;

   li{
      margin: 30px 0;
   }
`

export const StyledLink = styled(NavLink).attrs({ activeClassName: 'active-link' })`
   font-size: 14px;
   font-weight: 700;
   text-decoration: none;
   color: ${({ theme }) => theme.colors.darkGrey};
   position: relative;

   &.active-link::after{
      opacity: 1;
   }

   &::after{
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: -25px;
      width: 20px;
      height: 3px;
      background-color: ${({ theme }) => theme.colors.darkPurple};
   }
`

export const StyledLogo = styled.h1`
   font-size: ${({ theme }) => theme.fontSize.l};
   margin-top: 20px;
   margin-bottom: 40px;
   text-align: right;
   padding: 20px;
   background-color: ${({ theme }) => theme.colors.darkGrey};
   color: ${({ theme }) => theme.colors.white};
`