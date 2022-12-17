import * as types from '@/data/proto/StarRail'
import type { Writer, Reader } from 'protobufjs'
import { cmdID, type PacketName } from '../kcp'

interface Message<T = any> {
    encode: (arg: T) => Writer
    fromPartial: (arg: object) => T
    decode: (input: Reader | Uint8Array, length?: number) => T
}

const messageMap = new Map<PacketName, Message>()
const messageMapReversed = new Map<Message, PacketName>()

export const getType = (name: PacketName) => messageMap.get(name)!
export const getName = (type: Message) => messageMapReversed.get(type)!

const isMessageType = (type: Message | any): type is Message => type.encode !== undefined
const isPacketName = (key: string): key is PacketName => key in cmdID

for (const key of Object.keys(types)) {
    const value = types[key as keyof typeof types]
    if (!isMessageType(value)) continue

    // TODO process non-packets
    if (!isPacketName(key)) continue

    messageMap.set(key, value)
    messageMapReversed.set(value, key)
}
