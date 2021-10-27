import styled from "styled-components";

export const Wrapper = styled.div`
background-color: ${({ theme }) => theme.colors.white};
color: ${({ theme }) => theme.colors.darkGrey};
width: 100%;
max-width: 500px;
padding: 30px 50px;
border-radius: 25px;
box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
`;