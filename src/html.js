import React, { Component } from "react"
import * as PropTypes from "prop-types"

import TouchIcon from './assets/apple-touch-icon.png'
import Favicon32 from './assets/favicon-32x32.png'
import Favicon16 from './assets/favicon-16x16.png'
import PinnedTab from './assets/safari-pinned-tab.svg'

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

class Html extends Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }

    return (
      <html>
        <head>
          <title>Ana Fonseca - Fotografia</title>
          <meta charSet="utf-8" />
          <meta name="referrer" content="origin" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="apple-touch-icon" sizes="180x180" href={TouchIcon} />
          <link rel="icon" type="image/png" sizes="32x32" href={Favicon32} />
          <link rel="icon" type="image/png" sizes="16x16" href={Favicon32} />
          <link rel="mask-icon" href={PinnedTab} color="#5899e2" />
          <meta name="theme-color" content="#ffffff" />
          {this.props.headComponents}
          {css}
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}

Html.propTypes = {
  headComponents: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
  postBodyComponents: PropTypes.node.isRequired,
}

module.exports = Html