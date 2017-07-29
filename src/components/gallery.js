import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import 'animate.css'

const Wrapper = styled.div`
    columns: 3;
    column-gap: 60px;
    height: auto;

    @media screen and (max-width: 768px) {
        columns: 2;
    }
`;

const Item = styled(Link)`
    display: block;
    break-inside: avoid;
    margin-bottom: 60px;
    position: relative;
    overflow: hidden;

    &:hover {
        .hover {
            opacity: 1;
        }
    }
`;

const Image = styled.img`
    display: block;
    width: 100%;
    transition: all .3s ease;
    object-fit: cover;
    margin-bottom: 0;
`;

const Hover = styled.span`
    position: absolute;
    top: 0;
    bottom:0;
    left: 0;
    right: 0;
    z-index: 4;
    opacity: 0;
    transition: all .4s ease-in-out;
    background-color: rgba(255, 215, 213, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px;
`;

const Title = styled.span`
    color: #FFF;
    letter-spacing: 2px;
    font-family: 'Pacifico', cursive;
    font-size: 32px;
`;



const renderPost = ({ id, slug, featured_media_url, title, i }) => ( 
    <Item key={id} to={`/post/${slug}`} className={`animated fadeIn`} style={{
        animationDelay: `${300 * i}ms`
    }}>
        <Image src={featured_media_url} alt={title}></Image>
        <Hover className={'hover'}>
            <Title>{title}</Title>
        </Hover>
    </Item>
)

const Gallery = ({ posts }) => (
    <Wrapper>
        {posts && 
            posts.edges
                .map((edge, i) => renderPost({ ...edge.node, i }))
        }
    </Wrapper>
)

export default Gallery