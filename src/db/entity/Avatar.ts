import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import type { AvatarSkillTree, AvatarType, EquipRelic } from '@/data/proto/StarRail'

@Entity('avatar')
export default class Avatar {
    @PrimaryGeneratedColumn()
    id: number

    @Column('int')
    ownerUid: number

    @Column('int')
    baseAvatarId: number

    @Column('simple-json')
    avatarType: AvatarType

    @Column('int')
    level: number

    @Column('int')
    exp: number

    @Column('int')
    promotion: number

    @Column('int')
    rank: number

    @Column('int')
    equipmentUniqueId: number

    @Column('simple-json')
    equipRelicList: EquipRelic[]

    @Column('simple-json')
    skilltreeList: AvatarSkillTree[]

    @Column('simple-json')
    fightProps: {
        hp: number
        sp: number
        satiety: number
    }
}
