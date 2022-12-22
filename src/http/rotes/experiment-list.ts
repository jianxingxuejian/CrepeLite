import express from 'express'

const data = { retcode: 0, success: true, message: '', data: [] }

const router = express.Router().get('/data_abtest_api/config/experiment/list', (_req, res) => {
    res.send(data)
})

export default router
