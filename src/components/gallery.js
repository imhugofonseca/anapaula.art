import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import ProgressiveImage from 'react-progressive-image';

import 'animate.css'


const Wrapper = styled.div`
    columns: 2;
    column-gap: 20px;
    height: auto;


    @media screen and (max-width: 768px) {
        columns: 2;
    }

    @media screen and (max-width: 468px) {
        columns: initial;
    }    
`;

const Item = styled(Link)`
    display: inline-block;
    break-inside: avoid;
    margin-bottom: 20px;
    position: relative;
    overflow: hidden;
    background: #FEFEFE;

    &:hover {
        .hover {
            opacity: 1;
        }
    }
`;

const Image = styled.img`
    display: block;
    width: 100%;
    height: 100%;
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
    background-color: rgba(179, 208, 241, 0.3);
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
            <Title dangerouslySetInnerHTML={{ __html: title }} />
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