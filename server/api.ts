import express from 'express'
import cors from 'cors'

import { appRouter } from './routers/index'
import { createExpressMiddleware } from '@trpc/server/adapters/express'

const app = express()
app.use(cors({ origin: 'http://localhost:5173' }))

app.use('/trpc', createExpressMiddleware({ router: appRouter }))

app.listen(3000, () => console.log(`Server running`))

export type AppRouter = typeof appRouter
