import React from 'react'
import styled from 'styled-components'


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

const Slide = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const RightTitle = styled.h2`
    position: absolute;
    right: 60px;
    bottom: 60px;
    color: #FFF;
    font-size: 64px;
`;


const renderSlide = (index, { featured_media_url, title }) => (
    <Slide key={`slide_${index}}`}>
        <Image src={featured_media_url} alt={title} />
        <RightTitle>{title}</RightTitle>
    </Slide>   
)

const Slider = ({ current, slides }) => (
    <Wrapper>
        <Scroller current={current || 0}>
            {slides && slides.map((slide, i) => renderSlide(i, slide.node))}                
        </Scroller>                                
    </Wrapper>            
)

export default Slider