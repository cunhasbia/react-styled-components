import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

import { Div } from './styles';

export default function MediaIcons() {
    return (
        <Div>
            <FaFacebook color="#D79F12" size={30} />
            <FaTwitter color="#D79F12" size={30} />
            <FaInstagram color="#D79F12" size={30} />
        </Div>
    );
}