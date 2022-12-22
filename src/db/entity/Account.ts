import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('account')
export default class Account {
    @PrimaryGeneratedColumn()
    id: number

    @Column('text')
    uid: string

    @Column('text')
    name: string

    @Column('text')
    token: string
}
