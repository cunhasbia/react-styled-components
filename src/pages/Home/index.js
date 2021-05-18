import React from "react";

import Header from '../../components/Header';
import Section from '../../components/Section';
import Main from '../../components/Main';
import Footer from '../../components/Footer';

export default function Home() {
    document.title = 'Home | Getting started with React';

    return (
        <React.Fragment>
            <Header />
            <Section />
            <Main />
            <Footer />
        </React.Fragment>
    );
}