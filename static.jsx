import React from 'https://dev.jspm.io/react@16.13.1'
import ReactDomServer from 'https://dev.jspm.io/react-dom@16.13.1/server'

import Homepage from './views/Homepage.jsx'

const context = {
  request: {},
  response: {},
}

await Homepage(context)

await Deno.writeTextFile('./assets/index.html', context.response.body)
