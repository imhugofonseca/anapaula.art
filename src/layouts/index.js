import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import imagesLoaded from 'imagesloaded'

import Loading from '../components/loading'

import './index.css'

export default class TemplateWrapper extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    imagesLoaded( document.querySelector('body'), ( instance ) => {

      setTimeout(() => {
        this.setState({
          loadingFade: true
        })
        setTimeout(() => {
          this.setState({
            loading: false
          })
        }, 800)     
      },800);

    });
  }
  render() {
    return (
      <div>
        <Helmet
          title="Ana Fonseca - Fotografia"
          meta={[
            { name: 'description', content: 'Portfolio fotografico' },
            { name: 'keywords', content: 'photo, fotografia, ana fonseca, aveiro, torreira, portfolio' },
            { name: 'theme-color', content: '#5899E2' }
          ]}
        />
        {this.state.loading &&  <Loading fadeOut={this.state.loadingFade}></Loading> }
        {this.props.children()}
      </div>      
    )
  }

}
