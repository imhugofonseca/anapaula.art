import React from 'react'
import styled from 'styled-components'

import Container from './container'
import Brand from './brand'
import Nav from './nav'

const Wrapper = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 12;
`


const HeaderContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    display: flex;
    align-items: center;
`;

const Right = styled.div`
    display: flex;
    align-items: center;
`;

const Social = styled.a`
    font-size: 22px;
    margin-top: 20px;
`


const Header = ({ pages, categories, primary, currentPage }) => (
    <Wrapper>
        <HeaderContainer>
            <Left>
                <Brand primary={primary}>af</Brand>
                <Nav 
                    primary={primary}
                    pages={pages} 
                    categories={categories}
                    currentPage={currentPage}
                />
            </Left> 
            <Right>
                <Social href={`https://www.facebook.com/anapaulafons`} target={'_blank'}>
                    <span className={'icon-social-facebook'}></span>
                </Social>
            </Right>
        </HeaderContainer>
    </Wrapper>
)

export default Header
