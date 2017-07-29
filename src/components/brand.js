import styled from 'styled-components'

const Brand = styled.div`
    color: ${(props) => props.primary ? '#F76F8E': '#FFF'};
    font-size: 64px;
    letter-spacing: 2px;
    font-family: 'Pacifico', cursive;
    text-shadow: ${(props) => props.primary ? 'none' : '0 0 5px rgba(0,0,0, .7)'};
`

export default Brand