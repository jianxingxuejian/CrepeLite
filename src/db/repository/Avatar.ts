import dataSource from '../data-source'
import { Avatar } from '../entity'

const avatarRepository = dataSource.getRepository(Avatar)

export default avatarRepository
