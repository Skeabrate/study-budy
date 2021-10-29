import styled from "styled-components";

export const StyledSection = styled.section`
   height: 100vh;
   padding: 60px 40px;
   overflow-y: scroll;
`

export const Wrapper = styled.div`
   background-color: ${({ theme }) => theme.colors.white};
   color: ${({ theme }) => theme.colors.darkGrey};
   width: 100%;
   padding: 30px 50px;
   border-radius: 10px;
   box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
`;

export const StyledArticle = styled.article`
   box-shadow: 0 5px 15px -10px rgb(0 0 0 / 30%);
`

export const StyledTitle = styled.h1`
   color: ${({ theme }) => theme.colors.darkGrey};
   font-size: ${({ theme }) => theme.fontSize.xl};
   margin: 0;
`

export const StyledDescription = styled.p`
   font-size: 13px;
   margin: 0;
`

export const StyledParagraph = styled.p`
   font-size: 13px;
   line-height: 18px;
`

export const StyledContentWrapper = styled.div`
   display: flex;

   img{
      margin-left: 40px;
      max-width: 200px;
   }
`
