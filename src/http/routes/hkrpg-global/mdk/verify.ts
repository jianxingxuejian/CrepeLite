import express, { type Request } from 'express'
import { accountRepository } from '@/db'

interface RequestBody {
    uid: string
}

const router = express
    .Router()
    .get('/hkrpg_global/mdk/shield/api/verify', async (req: Request<{}, {}, RequestBody>, res) => {
        const uid = req.body.uid
        let account = await accountRepository.fromUid(uid)
        if (!account) {
            res.send({ retcode: -202, message: 'Account not found' })
            return
        }

        if (account.token === uid) {
            res.send({ retcode: 0, message: 'OK', data: { account } })
        } else {
            res.send({ retcode: -202, message: 'Invalid token' })
        }
    })

export default router
