import styled from "styled-components";

export const StyledListItem = styled.li`
   display: flex;
   align-items: center;
   position: relative;
   gap: 22px;
   padding: 30px 0;

   &:last-child{
      padding-bottom: 0;
   }

   &:not(:last-child)::after {
      content: "";
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 1px;
      background-color: #DFE2E8;
   }
`;

export const StyledName = styled.p`
   font-size: ${({ theme }) => theme.fontSize.l};
   margin: 5px 0 0 0;
   font-weight: 700;
`

export const StyledAttendance = styled.p`
   font-size: ${({ theme }) => theme.fontSize.s};
   margin: 0;
`

export const StyledInfoWrapper = styled.div`
   display: flex;
   gap: 10px;
`