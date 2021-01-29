import { Transformer } from '../types'
import { pixelIndex, rgbToHex } from '../utils/utils'

const { floor, random } = Math

type Args = {
	divider: number
	maxWidth: number
}

const squares5: Transformer<Args> = (args) => (
	context,
	width,
	height,
	pixels
) => {
	const divider = args?.divider || 100
	const squareSize = floor(width / divider)
	const maxWidth = args?.maxWidth || squareSize * 5
	const heightLimit = height / squareSize
	let column, row

	for (row = 0; row < heightLimit; row += 1) {
		for (column = 0; column < divider; column += 1) {
			const x = squareSize * column
			const y = squareSize * row
			const index = pixelIndex(x, y, width)
			const side = floor(random() * maxWidth)
			const alpha = pixels[index + 3]

			if (alpha === 0) {
				context.clearRect(x, y, side, side)
			} else {
				context.fillStyle = rgbToHex(
					pixels[index],
					pixels[index + 1],
					pixels[index + 2]
				)
				context.fillRect(x, y, side, side)
			}
		}
	}
}

export { squares5 }
export default squares5
