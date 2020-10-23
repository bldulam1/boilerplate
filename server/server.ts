// import { postMessages, putMessage } from './routes/messages'

// import bodyParser from 'body-parser'
// import express from 'express'
// import { getUser } from './routes/users'

// const app = express()
// const port = process.env.PORT || 5000

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))

// // user
// app.get('/api/users/:id', getUser)

// // messages
// app.post('/api/messages', postMessages)
// app.put('/api/messages/:id', putMessage)

// // tslint:disable-next-line:no-console
// app.listen(port, () => console.log(`Listening on port ${port}`))

import { ApolloServer } from 'apollo-server-express'
import compression from 'compression'
import cors from 'cors'
import { createServer } from 'http'
import depthLimit from 'graphql-depth-limit'
import express from 'express'
import schema from './schema'

const graphqlPath = process.env.GRAPHQL_PATH || 'graphql'
const port = process.env.PORT

const app = express()
const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(7)],
  playground: true,
})

app.use('*', cors())
app.use(compression())
server.applyMiddleware({ app, path: `/${graphqlPath}` })

const url = `http://localhost:${port}${server.graphqlPath}`
const message = `\nGraphQL is now running on ${url}`

// tslint:disable-next-line: no-console
createServer(app).listen({ port }, () => console.log(message))
