import express from 'express'
import config from '@/config'

interface Region {
    dispatch_url: string
    env_type: string
    name: string
    title: string
}

const region_list: Region[] = config.dispatch.map(({ url, name }) => ({
    title: 'CrepeSR',
    env_type: '2',
    dispatch_url: url,
    name
}))

const data = { retcode: 0, region_list }

const router = express.Router().get('/query_dispatch', (_req, res) => res.send(data))

export default router
