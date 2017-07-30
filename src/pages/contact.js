import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import Header from '../components/header'
import Footer from '../components/footer'
import Gallery from '../components/gallery'
import Container from '../components/container'

const Title = styled.h1`
  text-align: center;
  padding: 40px 0;
  letter-spacing: 4px;
  font-weight: 100;
  color: #DDD;
  text-transform: uppercase;
`

const Wrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

const CategoryFooter = styled(Footer)`
  text-align: center;
  color: #222!important;
  padding: 40px 0;
  opacity: 0.7;

  @media screen and (max-width: 468px) {
    padding: 20px;
  }
`;

const Image = styled.img`
  max-height: 100vh;
  width: auto;
  max-width: 100%;
  margin: 0 auto;
  display: block;
`;

const Content = styled.div`
  img {
    border-radius: 50%;
    display: block;
    margin: 0 auto;
    width: 250px;
    height: 250px;
    object-fit: cover;
  }

  h1 {
    padding: 40px 0;
    letter-spacing: 2px;
    font-family: 'Pacifico', cursive;
    color: #5899E2;
    text-transform: lowercase;
    font-weight: 100;
  }

  p {
    font-size: 16px;
    line-height: 28px;
    color: #222;
    max-width: 900px;
    margin: 0 auto;
    display: block;
  }

  form {
    max-width: 900px;
    margin: 0 auto;
    display: block;
  }

  label,
  input,
  textarea {
    width: 100%;
    display: block;
  }

  label {
    margin-top: 40px;
    margin-bottom: 10px;
  }

  input,
  textarea {
    padding: 20px;
    outline: none;
    &:focus {
      border:1px solid #5899E2;
    }
    appearance: textfield;
  }

  input[type=submit] {
    margin-top: 40px;
    outline: none;
    border: 0;
    background: #FFF;
    border:1px solid #5899E2;
    letter-spacing: 2px;
    font-family: 'Pacifico', cursive;
    color: #5899E2;
    text-transform: lowercase;
    font-weight: 100;
  }

`;

const Contact = (props) => {
  const categories = props.data.allWordpressCategory;
  const pages = props.data.allWordpressPage;
  const categoryPosts = props.data.allWordpressPost;

  // Todo the form should send to wordpres...

  return (
    <Wrapper>
      <Header pages={pages} categories={categories} primary={true} currentPage={props.location.pathname}></Header>
      <Container>
        <Title>Contacto</Title>
        <Content>
          <form name="contact" action="thank-you" netlify>
            <p>
              <label>Nome: <input type="text" name="name" /></label>   
            </p>
            <p>
              <label>Email: <input type="email" name="email" /></label>
            </p>
            <p>
              <label>Mensagem: <textarea name="message" /></label>
            </p>
            <p>
              <input type="submit" value="Enviar" />
            </p>
          </form>        
        </Content>        
      </Container>
      <CategoryFooter />
    </Wrapper>
  )
}

export default Contact


export const contactQuery = graphql`
  query contactQuery {  
    allWordpressPage {
      edges {
        node {
          id
          title
          slug
        }
      }
    }      
    allWordpressCategory {
      edges {
        node {
          id
          description
          name
          slug
          taxonomy
        }
      }
    }
  }
`;