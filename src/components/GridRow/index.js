import React from 'react';

import { Row, DivImage, DivText, Title, Description } from './styles';

export default function GridRow({ rowreverse, title, description, image }) {
    return (
        <Row rowreverse={rowreverse}>
            <DivText>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </DivText>

            <DivImage image={image} />
        </Row>
    );
}