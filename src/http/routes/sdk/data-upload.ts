import express from 'express'

const data = { code: 0 }

const router = express.Router().get('/sdk/dataUpload', (_req, res) => res.send(data))

export default router
