import express from 'express'

const router = express.Router()

const data = { code: 0 }

router.get('/hkrpg/dataUpload', (_req, res) => {
    // TODO
    // try {
    //     const content = req.body[0].uploadContent;
    //     if (content.LogStr) {
    //         c.warn(content.LogStr);
    //         if (Logger.VERBOSE_LEVEL == VerboseLevel.ALL) c.trail(content.StackTrace);
    //     }
    // } catch { }
    res.send(data)
})

export default router
