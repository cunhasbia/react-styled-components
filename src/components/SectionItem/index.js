import React from 'react';

import { Div, Icon, Title, Description } from './styles';

export default function SectionItem({ icon, title, description }) {
    return (
        <Div>
            <Icon>{icon}</Icon>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </Div>
    );
}