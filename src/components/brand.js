import styled from 'styled-components'

const Brand = styled.div`
    color: ${(props) => props.primary ? '#5899E2': '#FFF'};
    font-size: 64px;
    letter-spacing: 2px;
    font-family: 'Pacifico', cursive;
    text-shadow: ${(props) => props.primary ? 'none' : '0 0 2px rgba(0,0,0, .7)'};
    z-index: 5;
    position: relative;
`

export default Brand