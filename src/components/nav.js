import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Wrapper = styled.nav`
    padding-left: 35px;
    margin-top: 20px;
    

    @media screen and (max-width: 768px) {
        display: none;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        opacity: 0;
        transition: opacity .5s ease;
        background: #FFF;
        margin: 0;
        padding: 0;
        &.active {
            display: flex;
            opacity: 1;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            a {
                margin-right: 0;
                margin-bottom: 20px;
            }
        }
    }    
`

const A = styled(Link)`
    color: ${(props) => props.primary ? '#B3D0F1' : '#FFF'};
    text-decoration: none;
    margin-right: 25px;
    font-size: 20px;
    font-family: 'Pacifico', cursive;
    text-shadow: ${(props) => props.primary ? 'none' : '0 0 2px rgba(0,0,0, .4)'};
    transition: all .2s ease-in-out;

    &:hover,
    &.active {
        color: #5899E2;
        text-shadow: ${(props) => props.primary ? 'none' : '0 0 2px rgba(255,255,255, .4)'};
    }

    
   
`
const INVALID_PAGES = ['uncategorized'];

const isCurrentPage = (currentPage, path) => {
    return currentPage === path ? 'active' : '';
}

const isValidPage = ({ node }) => {
    const slug = node.slug || node.title;
    return !INVALID_PAGES.find((v) => v  === slug);
}

const renderPageLink = ({ slug, title, primary, currentPage, active }) => (
    <A 
        key={slug} 
        to={`/${slug}`} 
        primary={primary || active}
        className={isCurrentPage(currentPage, slug)}
        dangerouslySetInnerHTML={{ __html: title }}
    />
)

const renderCategoryLink = ({ slug, name, primary, currentPage, active }) => (
    <A 
        key={slug} 
        to={`/category/${slug}`} 
        primary={primary || active}
        className={isCurrentPage(currentPage, `/category/${slug}`)}
        dangerouslySetInnerHTML={{ __html: name }}
    />
)


const Nav = ({ pages, categories, primary, currentPage, active }) => (
    <Wrapper className={active && 'active'}>
        <A to={'/'} 
           primary={primary || active} 
           className={isCurrentPage(currentPage, `/`)}>
        Inicio
        </A>
        
        {categories && 
            categories.edges
                .filter(isValidPage)
                .map((edge) => renderCategoryLink({ ...edge.node, primary, currentPage, active }))
        }
        
        {pages && 
            pages.edges
                .filter(isValidPage)
                .map((edge) => renderPageLink({ ...edge.node, primary, currentPage, active }))
        }

    </Wrapper>
)

export default Nav
