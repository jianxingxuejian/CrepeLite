import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { Avatar } from './entity'

const dataSource = new DataSource({
    type: 'better-sqlite3',
    database: './sqlite/crepelite.db',
    synchronize: true,
    logging: true,
    entities: [Avatar],
    migrations: [],
    subscribers: []
})

await dataSource.initialize()

export default dataSource
