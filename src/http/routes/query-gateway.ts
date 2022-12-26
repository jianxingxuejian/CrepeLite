import express from 'express'
import { Gateserver } from '@/data/proto/StarRail'
import config from '@/config'

const { ip, port, maintenance, maintenanceMsg } = config.server

const dataObj = Gateserver.fromPartial({
    retcode: 0,
    msg: 'OK',
    regionName: 'CrepeSR',
    ip,
    port,
    serverDescription: 'This is not BingusRail',
    exResourceUrl: 'https://localhost/asb/design',
    dataUseAssetBoundle: false,
    resUseAssetBoundle: false,
    assetBundleUrl: 'https://localhost/asb'
})

if (maintenance) {
    dataObj.retcode = 2
    dataObj.msg = maintenanceMsg
    dataObj.stopBeginTime = Date.now()
    dataObj.stopEndTime = Date.now() * 2
}

const errObject = Gateserver.fromPartial({
    retcode: 2,
    msg: 'Internal server error',
    stopBeginTime: Date.now(),
    stopEndTime: Date.now() * 2
})

let rsp
try {
    rsp = Gateserver.encode(dataObj).finish()
} catch {
    rsp = Gateserver.encode(errObject).finish()
}

const data = Buffer.from(rsp).toString('base64')

const router = express.Router().get('/query_gateway', (_req, res) => res.send(data))

export default router
