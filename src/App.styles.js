import styled from "styled-components"

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: grid;
  grid-template-columns: 150px 1fr;
  margin: 0;
  padding: 0;
`

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`