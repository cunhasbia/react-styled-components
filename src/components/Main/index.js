import React from 'react';

import GridRow from '../GridRow';
import Contact from '../Contact';

import officeImage from '../../assets/images/office.jpg';
import keyboardImage from '../../assets/images/keyboard.jpeg';
import devImage from '../../assets/images/developer.jfif';
import contactImage from '../../assets/images/moon.jpg';

import { MainContent } from './styles';

export default function Main() {
    return (
        <MainContent>
            <GridRow 
                title='Lorem Ipsum'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id elementum sem. In hac habitasse platea dictumst.
                    In consequat eros at massa pharetra, at scelerisque ligula iaculis. Maecenas pellentesque mollis enim. Morbi risus magna,
                    rhoncus vel nisl fringilla, rhoncus scelerisque magna. Quisque in vulputate ex, cursus finibus sem. Nullam non mollis turpis.
                    In viverra elementum ipsum eu pharetra. Integer id aliquam odio, id pretium metus. Proin sed elementum arcu. Praesent fermentum
                    molestie tempor. Cras vestibulum, dolor sed pretium varius, nisi urna vehicula erat, et tincidunt sem felis ut leo. Ut est tellus,
                    vulputate vulputate mattis non, vehicula placerat orci. Cras dignissim suscipit erat sed blandit.'
                image={officeImage}
            />
            <GridRow
                rowreverse
                title='Lorem Ipsum'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id elementum sem. In hac habitasse platea dictumst.
                    In consequat eros at massa pharetra, at scelerisque ligula iaculis. Maecenas pellentesque mollis enim. Morbi risus magna,
                    rhoncus vel nisl fringilla, rhoncus scelerisque magna. Quisque in vulputate ex, cursus finibus sem. Nullam non mollis turpis.
                    In viverra elementum ipsum eu pharetra. Integer id aliquam odio, id pretium metus. Proin sed elementum arcu. Praesent fermentum
                    molestie tempor. Cras vestibulum, dolor sed pretium varius, nisi urna vehicula erat, et tincidunt sem felis ut leo. Ut est tellus,
                    vulputate vulputate mattis non, vehicula placerat orci. Cras dignissim suscipit erat sed blandit.'
                image={keyboardImage}
            />
            <GridRow
                title='Lorem Ipsum'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id elementum sem. In hac habitasse platea dictumst.
                    In consequat eros at massa pharetra, at scelerisque ligula iaculis. Maecenas pellentesque mollis enim. Morbi risus magna,
                    rhoncus vel nisl fringilla, rhoncus scelerisque magna. Quisque in vulputate ex, cursus finibus sem. Nullam non mollis turpis.
                    In viverra elementum ipsum eu pharetra. Integer id aliquam odio, id pretium metus. Proin sed elementum arcu. Praesent fermentum
                    molestie tempor. Cras vestibulum, dolor sed pretium varius, nisi urna vehicula erat, et tincidunt sem felis ut leo. Ut est tellus,
                    vulputate vulputate mattis non, vehicula placerat orci. Cras dignissim suscipit erat sed blandit.'
                image={devImage}
            />
            
            <Contact
                background={contactImage}
                title="Contact"
                phone="+55 51 0000-0000"
                email="sendemail@gmail.com"
            />
        </MainContent>
    );
}