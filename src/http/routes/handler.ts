import express from 'express'

const data = {
    retcode: -1,
    message: 'Invalid endpoint'
}

const router = express.Router().get('/Handler', (_req, res) => res.send(data))

export default router
