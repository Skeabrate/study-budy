import styled from "styled-components";

export const StyledLabel = styled.label`
   font-family: Montserrat, sans-serif;
   font-weight: bold;
   font-size: ${({ theme }) => theme.fontSize.m};
   color: ${({ theme }) => theme.colors.darkGrey};
`

export const StyledTitle = styled.h1`
   color: ${({ theme }) => theme.colors.darkGrey};
`