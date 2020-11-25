import { Transformer } from '../types'
import { pixelIndex, rgbToHex } from '../utils/utils'

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
			const index = pixelIndex(x, y, width)

			context.fillStyle = rgbToHex(
				pixels[index],
				pixels[index + 1],
				pixels[index + 2]
			)
			context.fillRect(x, y, squareSize, squareSize)
		}
	}
}

export { squares2 }
export default squares2
