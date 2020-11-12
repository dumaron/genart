import { Transformer } from './types'
import { circle1 } from './filters/circle1'
import { color1 } from './colors/color1'
import { applyColor } from './utils/colors'
import { color2 } from './colors/color2'
import copyPixels from './filters/copyPixels'

const images: ReadonlyArray<string> = ['/home/duma/foto/102D3500/DSC_0643.JPG']

const transformers: { [name: string]: Transformer } = {
	c1: applyColor(color1, copyPixels),
	c2: applyColor(color2, copyPixels),
	cc1: applyColor(color1, circle1),
	cc2: applyColor(color2, circle1),
}

export { images, transformers }
