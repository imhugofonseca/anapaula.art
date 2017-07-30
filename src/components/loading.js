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

const Svg = styled.svg`
    margin-left: 10px;
    width: 100px;
    height: 100px;
`;

const Colors = styled.g`
    animation: coolors 1s infinite;
    fill: #5899E2;
`;

const Loading = ({ fadeOut }) => (
    <Overlay className={fadeOut && `fadeOutBro`}>
        <AnimatedBrand >
            <Svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 2180 1820" preserveAspectRatio="xMidYMid meet" className={fadeOut && `animated zoomOut`}>
                <Colors id="layer1" fill="#000" stroke="none">
                    <path d="M1310 1689 c-75 -30 -116 -117 -131 -278 -6 -58 -13 -125 -15 -148 l-5 -43 -51 35 c-27 19 -58 36 -67 36 -9 1 -27 3 -41 4 -37 4 -69 -12 -106 -50 l-32 -34 -36 34 c-119 112 -292 36 -312 -136 -24 -207 151 -437 337 -441 44 -1 55 2 67 20 11 17 24 22 57 22 79 0 88 31 56 202 -27 146 -32 191 -22 207 13 21 42 6 100 -53 l54 -55 19 -143 c44 -339 139 -609 256 -732 53 -54 95 -76 148 -76 29 0 44 8 74 38 49 49 64 102 57 212 -10 173 -91 328 -284 547 -41 45 -73 91 -73 103 0 18 3 17 28 -11 l28 -31 144 -3 c93 -3 149 0 157 7 23 18 16 83 -12 117 -30 35 -112 57 -176 46 l-40 -7 6 34 c29 172 34 355 9 437 -19 65 -73 127 -122 141 -43 12 -40 12 -72 -1z m88 -237 c5 -73 -10 -225 -33 -332 -13 -61 -14 -53 -9 145 2 116 7 225 10 243 10 52 26 23 32 -56z m-608 -342 c14 -19 32 -79 50 -165 15 -74 26 -135 23 -135 -2 0 -22 9 -43 20 -83 43 -149 217 -110 291 16 29 55 24 80 -11z m673 -500 c42 -70 73 -143 92 -216 17 -65 20 -151 6 -173 -24 -38 -97 159 -151 407 -19 87 -19 87 1 62 11 -14 34 -50 52 -80z"/>
                </Colors>
            </Svg>            
        </AnimatedBrand>
    </Overlay>
)

export default Loading