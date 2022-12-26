import express from 'express'

const data = {
    retcode: 0,
    message: 'OK',
    data: {
        marketing_agreements: []
    }
}

const router = express.Router().get('/hkrpg_global/mdk/agreement/api/getAgreementInfos', (_req, res) => res.send(data))

export default router
