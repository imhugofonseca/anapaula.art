import React from 'react'
import styled from 'styled-components'

import Brand from './brand'

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #FCFCFC;
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .8s ease-out;
    &.fadeOutBro {
        opacity: 0;
    }
`;

const AnimatedBrand = styled(Brand)`
    animation: jello 1s infinite;
    text-shadow: none;
    width: 100%;
    text-align: center;
    display: block;
`;

const Text = styled.span`
    animation: coolors 1s infinite;
    margin-left: 10px;
`;


const Loading = ({ fadeOut }) => (
    <Overlay className={fadeOut && `fadeOutBro`}>
        <AnimatedBrand className={fadeOut && `animated zoomOut`}><Text>af&nbsp;</Text></AnimatedBrand>
    </Overlay>
)

export default Loading