# anapaula.art
A very simple website using gatsby and its wordpress plugin

## Developing

First set the required environment variables
```
WP_USER

WP_PASS

WP_CLIENT_ID

WP_CLIENT_SECRET
```

Install stuff
`npm install`

Start developing
`gastby develop`


## Hosting
This website is fully hosted in Netlify and with wordpress.com.

To deploy changes from wordpress.com I have a script running somewhere in a server of mine that checks for changes in wordpress.com and triggers the build in netlify

