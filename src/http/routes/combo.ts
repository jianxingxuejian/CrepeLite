import express from 'express'

const router = express.Router()

const data = { data: null, message: 'RetCode_NoConfig', retcode: 7 }

router.get('/combo/box/api/config/sdk/combo', (_req, res) => {
    res.send(data)
})

export default router
