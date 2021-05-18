import React from 'react';
import { FaDesktop, FaBuffer, FaCheckCircle } from 'react-icons/fa';

import SectionItem from '../SectionItem';

import { SectionContainer } from './styles';

export default function Section() {
    const items = [
        {
            icon: <FaDesktop />,
            title: "Desktop only",
            description: "Let's learn how to use a framework.",
        },
        {
            icon: <FaBuffer />,
            title: "Created with components",
            description: "We use Styled Components.",
        },
        {
            icon: <FaCheckCircle />,
            title: "Easy to use",
            description: "We are on the way!",
        },
    ];

    return (
        <SectionContainer>
            {items.map(item => <SectionItem icon={item.icon} title={item.title} description={item.description} /> )}
        </SectionContainer>
    );
}