import styled from 'styled-components';

export const HeaderContainer = styled.header `
    width: 100%;
    height: 20rem;
    background: top center url(${props => props.background}) no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h1 `
    color: #f8f8f8;
    font-size: clamp(1.5rem, 2.2rem, 3vw);
`;