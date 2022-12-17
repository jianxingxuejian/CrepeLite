import fs from 'fs-extra'
import path from 'path'

export function readJson<T = Json>(path: string) {
    if (!fs.existsSync(path)) {
        return undefined
    }
    const data = fs.readFileSync(path, 'utf-8')
    return JSON.parse(data) as T
}

/**
 * write json text to a new file
 * @param filePath file path
 * @param json json object
 * @param format format or not
 */
export function writeJson(filePath: string, json: Json, format?: boolean) {
    const fullPath = path.join(process.cwd(), filePath)
    mkdir(fullPath)
    const text = format ? JSON.stringify(json, null, 4) : JSON.stringify(json)
    fs.writeFile(fullPath, text, 'utf-8')
}

function mkdir(path: string) {
    if (!fs.existsSync(path)) return

    const parent = path.split('\\').slice(0, -1)
    if (parent) {
        fs.mkdirSync(parent.join('/'), { recursive: true })
    } else {
        throw new Error('path not exist')
    }
}
