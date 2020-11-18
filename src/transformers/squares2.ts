import { Transformer } from '../types'
import { rgbToHex } from '../utils/utils'

const { floor } = Math

type Args = {
	divider: number
}

const squares2: Transformer<Args> = (args) => (
	context,
	width,
	height,
	pixels
) => {
	const divider = args?.divider || 300
	const squareSize = floor(width / divider)
	const heightLimit = height / squareSize
	let column, row

	for (row = 0; row < heightLimit; row += 1) {
		for (column = 0; column < divider; column += 1) {
			const x = squareSize * column
			const y = squareSize * row
			const pixelIndex = (y * width + x) * 4

			context.fillStyle = rgbToHex(
				pixels[pixelIndex],
				pixels[pixelIndex + 1],
				pixels[pixelIndex + 2]
			)
			context.fillRect(x, y, squareSize, squareSize)
		}
	}
}

export { squares2 }
export default squares2
