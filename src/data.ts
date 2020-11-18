import { BindedTransformer } from './types'
import { circle1 } from './filters/circle1'
import { color1 } from './colors/color1'
import { applyColor } from './utils/colors'
import { color2 } from './colors/color2'
import copyPixels from './filters/copyPixels'
import { join } from './utils/utils'
import { color3 } from './colors/color3'

const images: ReadonlyArray<string> = ['/home/duma/foto/102D3500/DSC_0643.JPG']

const transformers: { [name: string]: BindedTransformer } = {
	1: applyColor(color2(), copyPixels()),
	2: applyColor(color2(), circle1()),
	3: applyColor(
		color2(),
		join([
			circle1({ iterations: 1000, radiusMultiplier: 500 }),
			circle1({ iterations: 1000, radiusMultiplier: 100 }),
			circle1({ iterations: 30000, radiusMultiplier: 20 }),
		])
	),
	4: applyColor(
		color1(),
		join([
			circle1({ iterations: 20000, radiusMultiplier: 100 }),
			circle1({ iterations: 30000, radiusMultiplier: 25 }),
		])
	),
	5: applyColor(
		color2(),
		join([
			circle1({ iterations: 20000, radiusMultiplier: 100 }),
			circle1({ iterations: 30000, radiusMultiplier: 25 }),
		])
	),
	6: applyColor(
		color3({ multiplier2: 0.2 }),
		circle1({ radiusMultiplier: 20 })
	),
}

export { images, transformers }
