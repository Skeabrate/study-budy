import React from 'react';
import { Wrapper, StyledLogo, StyledNav, StyledLink } from "./Navigation.styles"

const Navigation = () => {
   return (
      <Wrapper>

         <StyledLogo>
            Study
            <br />
            Buddy
         </StyledLogo>

         <StyledNav>
            <li>
               <StyledLink exact to="/">Dashboard</StyledLink>
            </li>

            <li>
               <StyledLink to="/Add-user">Add user</StyledLink>
            </li>

            <li>
               <StyledLink to="/Settings">Settings</StyledLink>
            </li>

            <li>
               <StyledLink to="/Login">Logout</StyledLink>
            </li>   
         </StyledNav>
      </Wrapper>
   );
};

export default Navigation;