import styled from "styled-components";

export const StyledAverageIcon = styled.div`
   background-color: ${(props) => props.average};
   width: ${({isBig}) => isBig ? '70px' : '35px'};
   height: ${({isBig}) => isBig ? '70px' : '35px'};
   border-radius: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   color: ${({ theme }) => theme.colors.white};
   font-size: ${({ theme, isBig }) => isBig ? theme.fontSize.xl : theme.fontSize.m};
   font-weight: 700;
`