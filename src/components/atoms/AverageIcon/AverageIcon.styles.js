import styled from "styled-components";

export const StyledAverageIcon = styled.div`
   background-color: ${(props) => props.average};
   width: 35px;
   height: 35px;
   border-radius: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   color: ${({ theme }) => theme.colors.white};
   font-size: ${({ theme }) => theme.fontSize.m};
   font-weight: 700;
`