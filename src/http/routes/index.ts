import fg from 'fast-glob'
import type { Router } from 'express'

const files = await fg('src/http/routes/**/*.ts')
console.log(files)
const routers: Router[] = []
files.forEach(async file => {
    const router = (await import(file)).default as Router
    routers.push(router)
})

export default routers
