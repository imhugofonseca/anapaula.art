import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import LazyLoad from 'react-lazyload';

import 'animate.css'


const Wrapper = styled.div`
    height: auto;
    display: flex;
    width: 100%;   

    @media screen and (max-width: 468px) {
        flex-direction: column;
    } 
`;

const LeftRow = styled.div`
    width: 50%;
    flex: 0.5;
    padding-right: 10px;

    @media screen and (max-width: 468px) {
        width: 100%;
        flex: 1;
        padding: 0;
    }
`;

const RightRow = styled.div`
    width: 50%;
    flex: 0.5;
    padding-left: 10px;

    @media screen and (max-width: 468px) {
        width: 100%;
        flex: 1;
        padding: 0;
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
        <LazyLoad height={200} once>
            <Image src={`${featured_media_url}?quality=90&strip=info&w=1200`} alt={title}></Image>
        </LazyLoad>
        <Hover className={'hover'}>
            <Title dangerouslySetInnerHTML={{ __html: title }} />
        </Hover>
    </Item>
)

const Gallery = ({ posts }) => {
    const half = Math.ceil(posts.edges.length / 2);
    let leftRow = posts.edges.slice(0, half);
    let rightRow = posts.edges.slice(half);

    if (posts.edges.length % 2) {
        rightRow.push(leftRow[leftRow.length - 1])
        leftRow.pop()
    }


    return (
        <Wrapper>
            <LeftRow>
                {leftRow && 
                    leftRow
                        .map((edge, i) => renderPost({ ...edge.node, i }))
                }
            </LeftRow>

            <RightRow>
                {rightRow && 
                    rightRow
                        .map((edge, i) => renderPost({ ...edge.node, i }))
                }
            </RightRow>            
        </Wrapper>
    )
}

export default Gallery