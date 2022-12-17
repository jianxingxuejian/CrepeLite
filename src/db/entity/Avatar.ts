import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import type { AvatarSkillTree, AvatarType, EquipRelic } from '@/data/proto/StarRail'

@Entity('avatar')
export class Avatar {
    @PrimaryGeneratedColumn()
    id: number

    @Column('int')
    ownerUid: number
}
