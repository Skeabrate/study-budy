import styled from "styled-components"

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: grid;
  grid-template-columns: 150px 1.2fr 0.8fr;
  margin: 0;
  padding: 0;
  height: 100vh;
  overflow: hidden;
`

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledMainContent = styled.div`
  display: grid;
  grid-template-rows: 100px 1fr;
  height: 100vh;
  border-right: 1px solid #DFE2E8;
`