import React from 'https://dev.jspm.io/react@16.13.1'
import ReactDomServer from 'https://dev.jspm.io/react-dom@16.13.1/server'

export default function view(View, getProps) {
  return async context => {
    let props = await Promise.resolve(getProps(context))
    let content = ReactDomServer.renderToString(<View {...props} />)

    context.response.type = 'text/html'
    context.response.body = `
    <html>
      <head>
        <title>${props?.title || 'Guiding Bolt'}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link rel="stylesheet" href="/styles/global.css" />
      </head>
      <body>
        ${content}
      </body>
    </html>
    `
  }
}
