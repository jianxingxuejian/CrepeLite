import { avatarRepository } from './repository/'
import { Avatar } from './entity'

export async function test() {
    const avatar = new Avatar()
    avatar.ownerUid = 9999
    avatarRepository.save(avatar)
}
