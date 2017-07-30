import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`

  &.active {
    transition: all 0.3s ease-in-out;
    transition-delay: 0.3s;
    transform: rotate(45deg);

    .middle {
        width: 0px;       
    }

    .top,
    .bottom {
        transition-delay: 0.2s;
    }

    .top {
        transform: translateY(8px);
    }

    .bottom {
        transform: translateY(-8px) rotate(90deg);
    }
  }
`;

const Line = styled.span`
  width: 35px;
  height: 2px;
  background-color: #ecf0f1;
  display: block;
  margin: 6px auto;
  transition: all 0.3s ease-in-out;
`;

const TopLine = styled(Line)``

const MiddleLine = styled(Line)`
    transition-delay: 0.3s;
`
const BottomLine = styled(Line)``



const Hamburger = ({ onClick, active, className }) => (
    <Wrapper onClick={onClick} className={`${className} ${active && 'active'}`}>
        <TopLine className={`top`} />
        <MiddleLine className={`middle`} />
        <BottomLine className={`bottom`} />
    </Wrapper>
)

export default Hamburger