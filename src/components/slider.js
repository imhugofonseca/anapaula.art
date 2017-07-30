import React from 'react'
import styled from 'styled-components'
import Layer from '../assets/layer.png'
import Link from 'gatsby-link'

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    overflow:hidden;
`;

const Scroller = styled.div`
    width: 100%;
    height: 100%;
    transform: ${(props) => `translateY(-${props.current * 100}%)`};
    transition: all 1s ease-in-out;
    
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 3;
    animation-play-state: paused;
    object-position: center;
    transition: all .6s ease;
`;

const Slide = styled.div`
    width: 100%;
    height: 100%;
    position: relative;

    ${(props) => props.isCurrent && `
        .slide-image {
            @media screen and (max-width: 768px) {
                animation: position 20s ease;
                animation-play-state: initial;
            }
        }
    `}   
`;



const RightTitle = styled(Link)`
    position: absolute;
    right: 60px;
    bottom: 60px;
    color: #FFF;
    font-size: 64px;
    z-index: 4;
    font-weight: 100;

    @media screen and (max-width: 468px) {
        padding: 0 20px;
        width: 100%;
        right: initial;
        font-size: 22px;
        text-align: right;
    }
`;

const ImageOverlay = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url(${Layer}) repeat scroll left top;
    z-index: 2;
    opacity: 0.4;

`;

const renderSlide = (index, { featured_media_url, title, slug }, current) => (
    <Slide key={`slide_${index}}`} isCurrent={index === current}>
        <ImageOverlay></ImageOverlay>
        <Image src={`${featured_media_url}?quality=60&stripinfo=true`} alt={title} className={'slide-image'} />
        <RightTitle to={`/post/${slug}`}>{title}</RightTitle>
    </Slide>   
)

const Slider = ({ current, slides }) => (
    <Wrapper>
        <Scroller current={current || 0}>
            {slides && slides.map((slide, i) => renderSlide(i, slide.node, current))}                
        </Scroller>                                
    </Wrapper>            
)

export default Slider