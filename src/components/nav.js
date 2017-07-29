import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Wrapper = styled.nav`
    padding-left: 35px;
    margin-top: 20px;
`

const A = styled(Link)`
    color: ${(props) => props.primary ? '#ffd7d5' : '#FFF'};
    text-decoration: none;
    margin-right: 35px;
    font-size: 22px;
    font-family: 'Pacifico', cursive;
    text-shadow: ${(props) => props.primary ? 'none' : '0 0 2px rgba(0,0,0, .4)'};
    transition: all .2s ease-in-out;

    &:hover,
    &.active {
        color: #F76F8E;
    }
   
`
const INVALID_PAGES = ['uncategorized'];

const isCurrentPage = (currentPage, path) => {
    return currentPage === path ? 'active' : '';
}

const isValidPage = ({ node }) => {
    const slug = node.slug;
    return !INVALID_PAGES.find((v) => v  === slug);
}

const renderPageLink = ({ slug, title, primary, currentPage }) => (
    <A 
        key={slug} 
        to={slug} 
        primary={primary}
        className={isCurrentPage(currentPage, slug)}
    >
        {title}
    </A>
)

const renderCategoryLink = ({ slug, name, primary, currentPage }) => (
    <A 
        key={slug} 
        to={`/category/${slug}`} 
        primary={primary}
        className={isCurrentPage(currentPage, `/category/${slug}`)}
    >
        {name}
    </A>
)


const Nav = ({ pages, categories, primary, currentPage }) => (
    <Wrapper>
        <A to={'/'} primary={primary} className={isCurrentPage(currentPage, `/`)}>Inicio</A>
        
        {categories && 
            categories.edges
                .filter(isValidPage)
                .map((edge) => renderCategoryLink({ ...edge.node, primary, currentPage }))
        }
        
        {pages && 
            pages.edges
                .filter(isValidPage)
                .map((edge) => renderCategoryLink({ ...edge.node, primary, currentPage }))
        }

    </Wrapper>
)

export default Nav
