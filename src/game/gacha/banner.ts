import { readJson } from '@/utils'

interface Banner {
    gachaId: number
    detailWebview: string
    rateUpItems4: number[]
    rateUpItems5: number[]
    costItemId: number
}

function readBanners() {
    const banners = readJson<Banner[]>('./src/banners.json')
    if (!banners) {
        throw new Error('banners not exist')
    }

    return banners
}

const banners = readBanners()

export default banners
