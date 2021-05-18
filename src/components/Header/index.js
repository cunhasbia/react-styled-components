import React from 'react';

import headerImage from '../../assets/images/moon.jpg';

import { HeaderContainer, Title } from './styles';

export default function Header() {
    return (
        <HeaderContainer background={headerImage}>
            <Title>Getting started with React</Title>
        </HeaderContainer>
    );
}