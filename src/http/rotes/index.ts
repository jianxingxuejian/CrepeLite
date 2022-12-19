import fs from 'fs-extra'
import { fileURLToPath } from 'url'

fs.readdirSync(fileURLToPath(new URL('./', import.meta.url)))
