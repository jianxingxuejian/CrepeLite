import dataSource from '../data-source'
import { Account } from '../entity'

const accountRepository = dataSource.getRepository(Account).extend({
    fromUsername(name: string) {
        return this.findOneBy({ name })
    },
    fromUid(uid: string) {
        return this.findOneBy({ uid })
    },
    async create(name: string, uid?: string) {
        if (uid) {
            const account = await this.fromUid(uid)
            if (account) {
                throw new Error(`Account with uid ${uid} already exists.`)
            }
        } else {
            uid = Math.round(Math.random() * 50000).toString()
        }
        const token = generateToken()
        const account = new Account()
        account.name = name
        account.token = token
        account.uid = uid
        const result = await this.insert(account)
        if (result.identifiers.length === 1) {
            return account
        } else {
            return null
        }
    }
})

function generateToken() {
    let token = ''
    for (let i = 0; i < 16; i++) {
        token += Math.random().toString(36).substring(2, 15)
    }
    return token
}

export default accountRepository
