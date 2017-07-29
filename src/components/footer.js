import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
    color: #FFF;
`;

const Text = styled.p`
    margin: 0;
    font-size: 12px;
`;

const Footer = ({ className }) => (
    <Wrapper className={className}>
        <Text>Made with ❤️ by <a href="https://github.com/kapz" target="_blank">hugo</a> using gatsby & wordpress</Text>
        <Text>All photos are mine and would like to be asked permission when using them.</Text>
    </Wrapper>
)


export default Footer