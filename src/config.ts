import { readJson, writeJson } from '@/utils'

type Config = {
    http: { host: string; port: number }
    server: { ip: string; port: number } & (
        | { maintenance: boolean; maintenanceMsg: string }
        | { maintenance?: never; maintenanceMsg?: never }
    )
    dispatch: { name: string; url: string }[]
    autoAccount: boolean
}

const defaultConfig: Config = {
    http: { host: '0.0.0.0', port: 443 },
    server: { ip: '127.0.0.1', port: 22102 },
    dispatch: [{ name: 'CrepeSR', url: 'http://localhost/query_gateway' }],
    autoAccount: true
}

function readConfig() {
    const path = './src/config.json'
    try {
        const config = readJson<JsonObject>(path)
        if (!config) {
            writeJson(path, defaultConfig, true)
            return defaultConfig
        }

        const defaultKeys = Object.keys(defaultConfig)
        const keys = Object.keys(config).filter(key => defaultKeys.includes(key))
        if (keys.length < defaultKeys.length) {
            console.error('config.json miss some settings, use default settings')
            return defaultConfig
        }

        return config as Config & JsonObject
    } catch {
        console.error('parse config.json fail, use default settings')
        return defaultConfig
    }
}

const config = readConfig()

export default config
