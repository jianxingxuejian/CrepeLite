import { fileURLToPath } from 'url'
import express from 'express'
import https_config from './cert'

const staticPath = fileURLToPath(new URL('./static', import.meta.url))
const server = express().use(express.json()).use(express.static(staticPath))

export default server
