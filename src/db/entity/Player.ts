import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { HeroBasicType, ExtraLineupType } from '@/data/proto/StarRail'

interface BasicInfo {
    nickname: string
    level: number
    exp: number
    stamina: number
    mcoin: number
    hcoin: number
    scoin: number
    worldLevel: number
}

interface Lineup {
    avatarList: number[]
    isVirtual: boolean
    planeId: number
    mp: number
    leaderSlot: number
    index: number
    extraLineupType: ExtraLineupType
    name: string
}

@Entity('avatar')
export default class Player {
    @PrimaryGeneratedColumn()
    id: number

    @Column('text')
    name: string

    @Column('text')
    token: string

    @Column('int')
    banned: boolean

    @Column('int')
    heroBasicType: HeroBasicType

    @Column('simple-json')
    basicInfo: BasicInfo

    @Column('simple-json')
    lineup: {
        curIndex: number
        lineups: {
            [key: number]: Lineup
        }
    }

    @Column('simple-json')
    posData: {
        floorID: number
        planeID: number
        pos: {
            x: number
            y: number
            z: number
        }
    }
}
