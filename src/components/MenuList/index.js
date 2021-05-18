import React from 'react';

import Copyright from '../Copyright';

import { MenuDiv, Ul, Li } from './styles';

export default function MenuList() {
    return (
        <MenuDiv>
            <Ul>
                <Li>About</Li>
                <Li>Contact</Li>
                <Li>Terms of Use</Li>
                <Li>Privacy Policy</Li>
            </Ul>
            
            <Copyright />
        </MenuDiv>
    );
}