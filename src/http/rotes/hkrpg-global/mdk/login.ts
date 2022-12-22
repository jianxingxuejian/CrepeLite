import express, { type Request } from 'express'
import { accountRepository } from '@/db'
import config from '@/config'

interface RequestBody {
    account: string
}

const router = express
    .Router()
    .get('/hkrpg_global/mdk/shield/api/login', async (req: Request<{}, {}, RequestBody>, res) => {
        let account = await accountRepository.fromUsername(req.body.account)
        if (!account) {
            if (!config.autoAccount) {
                res.send({ retcode: -202, message: 'Account not found' })
                return
            }
            const newAccount = await accountRepository.create(req.body.account)
            if (!newAccount) {
                res.send({ retcode: -202, message: 'Create Account fail' })
                return
            }
            account = newAccount
        }
        res.send({
            retcode: 0,
            message: 'OK',
            data: {
                account
            }
        })
    })

export default router
