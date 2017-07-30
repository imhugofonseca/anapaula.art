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
  color: #222;
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


const PageTemplate = (props) => {
  const categories = props.data.allWordpressCategory;
  const pages = props.data.allWordpressPage;
  const categoryPosts = props.data.allWordpressPost;
  const post = props.data.wordpressPost;

  return (
    <Wrapper>
      <Header pages={pages} categories={categories} primary={true} currentPage={props.location.pathname}></Header>
      <Container>
        <Title dangerouslySetInnerHTML={{ __html: post.title }} />
        <Image src={post.featured_media_url} alt={post.title} />
      </Container>
      <CategoryFooter />
    </Wrapper>
  )
}

export default PageTemplate


export const postQuery = graphql`
  query postQuery($id: String!, $featured_media: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      featured_media_url
    }    
    wordpressWpMedia(id: { ne: $featured_media }) {
      id
      source_url
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
    allWordpressPage {
      edges {
        node {
          id
          title
          slug
        }
      }
    }    
    wordpressCategory(id: { eq: $id }) {
      name
    }
  }
`;