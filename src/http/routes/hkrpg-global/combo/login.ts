import express from 'express'

// TODO unknown type
interface Request {
    uid: unknown
    token: unknown
    guest: unknown
}

const router = express.Router().get('/hkrpg_global/combo/granter/login/v2/login', (req, res) => {
    const { uid, token, guest } = <Request>JSON.parse(req.body.data)
    const data = {
        retcode: 0,
        message: 'OK',
        data: {
            combo_id: 1,
            open_id: uid,
            combo_token: token,
            data: { guest },
            heartbeat: false,
            account_type: 1,
            fatigue_remind: null
        }
    }
    res.send(data)
})

export default router
