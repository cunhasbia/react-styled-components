import styled from 'styled-components';

export const ContactContainer = styled.div `
    width: 100%;
    height: 20rem;
    background: url(${props => props.background}) bottom center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;        
    flex-direction: column;
`;

export const Title = styled.h2 `
    color: #fff;
    font-size: clamp(1rem, 1.4rem, 2vw);        
`;

export const Text = styled.p `
    color: #ccc;
    font-size: clamp(0.8rem, 1rem, 1.5vw); 
    margin: 1rem;    
`;