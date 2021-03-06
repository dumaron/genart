import { Transformer } from '../types'
import { pixelIndex, rgbToHex } from '../utils/utils'

const { floor, random } = Math

type Args = {
	iterations: number
	maxWidth: number
	minWidth: number
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
	const minWidth = args?.minWidth || 0

	for (i = 0; i < iterations; i += 1) {
		const x = floor(random() * width)
		const y = floor(random() * height)
		const side = floor(random() * (maxWidth - minWidth)) + minWidth
		const index = pixelIndex(x, y, width)

		context.fillStyle = rgbToHex(
			pixels[index],
			pixels[index + 1],
			pixels[index + 2]
		)
		context.fillRect(x, y, side, side)
	}
}

export { squares1 }
export default squares1
