import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import Container from './container'
import Brand from './brand'
import Nav from './nav'
import Hamburger from './hamburger'

const Wrapper = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 12;
`

const HeaderHamburger = styled(Hamburger)`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
    }    
`;

const HeaderContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    padding-bottom: 20px;
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

    @media screen and (max-width: 768px) {
        display: none;
    }    
`

const HeaderBrand = styled(Brand)`
    @media screen and (max-width: 768px) {
        font-size: 22px;
    }
`;

export default class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            hamburgerActive: false,
        }
    }

    onClickHamburger() {
        this.setState({
            hamburgerActive: !this.state.hamburgerActive
        });
    }

    render() {
        const { pages, categories, primary, currentPage } = this.props
        return (
            <Wrapper>
                <HeaderContainer>
                    <Left>
                        <Link to={`/`}>
                            <HeaderBrand primary={primary || this.state.hamburgerActive}>af</HeaderBrand>
                        </Link>
                        <Nav 
                            primary={primary}
                            pages={pages} 
                            categories={categories}
                            currentPage={currentPage}
                            active={this.state.hamburgerActive}
                        />
                        
                    </Left> 
                    <Right>
                        <Social href={`https://www.facebook.com/anapaulafons`} target={'_blank'}>
                            <span className={'icon-social-facebook'}></span>
                        </Social>
                        <HeaderHamburger onClick={() => this.onClickHamburger()} active={this.state.hamburgerActive} />
                    </Right>
                </HeaderContainer>
            </Wrapper>
        )
    }
}
