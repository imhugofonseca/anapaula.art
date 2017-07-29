import React from 'react'
import Link from 'gatsby-link'

export default class Post extends React.Component {
  render() {
    console.log(this.props);
    const photo = this.props.data.wordpressWpMedia;
    return (
      <div>
        <img src={photo.source_url} alt={photo.id} />
      </div>
    )
  }
}

export const postQuery = graphql`
  query postQuery($id: String!, $featured_media: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
    }    
    wordpressWpMedia(id: { ne: $featured_media }) {
      id
      source_url
    }    
  }
`;