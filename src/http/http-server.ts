import { fileURLToPath } from 'url'
import express from 'express'
import https from 'https'
import config from '@/config'
import https_config from './cert'
import routes from './routes'

const { http } = config

const staticPath = fileURLToPath(new URL('./static', import.meta.url))
const server = express().use(express.json()).use(express.static(staticPath))

routes.forEach(route => server.use(route))

export default function httpStart() {
    https.createServer(https_config, server).listen(http.port, http.port)
    server.listen(80, http.host)
}
