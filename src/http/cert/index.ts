import { fileURLToPath } from 'url'
import { read } from '@/utils'

const getPath = (path: string) => fileURLToPath(new URL(path, import.meta.url))
const key = read(getPath('./cert.key'), 'utf-8')
const cert = read(getPath('./cert.crt'), 'utf-8')

if (!key || !cert) {
    throw new Error('fail to read cert')
}

const https_config = { key, cert }
export default https_config
