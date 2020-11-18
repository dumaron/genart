import { Transformer } from '../types'
import { rgbToHex } from '../utils/utils'

const { floor, random } = Math

type Args = {
	iterations: number
	maxWidth: number
}

const squares1: Transformer<Args> = (args) => (
	context,
	width,
	height,
	pixels
) => {
	let i
	const iterations = args?.iterations || 50000
	const maxWidth = args?.maxWidth || 50
	
	for (i = 0; i < iterations; i += 1) {
		const x = floor(random() * width)
		const y = floor(random() * height)
		const side = floor(random() * maxWidth)
		const pixelIndex = (y * width + x) * 4
		
		context.fillStyle = rgbToHex(
			pixels[pixelIndex],
			pixels[pixelIndex + 1],
			pixels[pixelIndex + 2]
		)
		context.fillRect(x, y, side, side)
	}
}

export { squares1 }
export default squares1
