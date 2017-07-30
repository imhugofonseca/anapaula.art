import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
    color: #FFF;
`;

const Text = styled.p`
    margin: 0;
    font-size: 10px;
`;

const SelfPromotion = styled.p`
    margin: 0;
    margin-top: 5px;
    font-size: 9px;
`;

const Love = styled.span`
    color: #B3B3F1;
`;

const Link = styled.a`
    color: #222;
`;

const Footer = ({ className }) => (
    <Wrapper className={className}>
        <Text>All photos are mine and would like to be asked permission when using them.</Text>
        <SelfPromotion>Made with <Love>&#10084;</Love> by <Link href="https://github.com/kapz" target="_blank" rel="noopener">hugo</Link> using gatsby & wordpress</SelfPromotion>
    </Wrapper>
)


export default Footer