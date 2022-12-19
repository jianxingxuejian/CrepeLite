import express from 'express'

const router = express.Router()

const data = {
    retcode: 0,
    message: 'OK',
    data: {
        id: '',
        action: 'ACTION_NONE',
        geetest: null
    }
}

router.get('/account/risky/api/check', (_req, res) => {
    res.send(data)
})

export default router
