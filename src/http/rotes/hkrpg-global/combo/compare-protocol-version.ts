import express from 'express'

const data = {
    retcode: 0,
    message: 'OK',
    data: {
        modified: true,
        protocol: {
            id: 0,
            app_id: 11,
            language: 'en',
            user_proto: '',
            priv_proto: '',
            major: 1,
            minimum: 2,
            create_time: '0',
            teenager_proto: '',
            third_proto: ''
        }
    }
}

const router = express
    .Router()
    .get('/hkrpg_global/combo/granter/api/compareProtocolVersion', (_req, res) => res.send(data))

export default router
