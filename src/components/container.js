import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 0 60px;
    margin: 0 auto;
    display: block;
    width: 100%;
    flex : 1;
`;

const Container = ({ children, className }) => (
    <Wrapper className={className}>
        { children }
    </Wrapper>
)

export default Container;