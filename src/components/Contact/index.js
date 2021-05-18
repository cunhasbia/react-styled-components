import React from 'react';

import { ContactContainer, Title, Text } from './styles';

export default function Contact({ background, title, phone, email }) {
    return (
        <ContactContainer background={background}>
            <Title>{title}</Title>
            <Text>{phone} | {email}</Text>
        </ContactContainer>
    );
}