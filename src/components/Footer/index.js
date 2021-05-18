import React from 'react';

import MenuList from '../MenuList';
import MediaIcons from '../MediaIcons';

import { FooterDiv } from './styles';

export default function Footer() {
    return (
        <FooterDiv>
            <MenuList />
            <MediaIcons />
        </FooterDiv>
    );
}