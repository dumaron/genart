import { Transformer } from '../types'
import { averagePixel } from '../utils/utils'

const { floor, random } = Math

type Args = {
	divider: number
}

const points1: Transformer<Args> = (args) => (
	context,
	width,
	height,
	pixels
) => {
	const divider = args?.divider || 70
	const squareSize = floor(width / divider)
	const heightLimit = height / squareSize
	let column, row

	context.fillStyle = '#333'

	for (row = 0; row < heightLimit; row += 1) {
		for (column = 0; column < divider; column += 1) {
			const x = squareSize * column
			const y = squareSize * row
			const meanPixel = averagePixel(
				pixels,
				x,
				y,
				squareSize,
				squareSize,
				width
			)
			const mean = (meanPixel[0] + meanPixel[1] + meanPixel[2]) / 3
			if (mean === 0) {
				continue
			}
			const points = (255 - mean) * 3
			let i

			for (i = 0; i < points; i += 1) {
				const px = floor(x + squareSize * 0.1 + random() * squareSize * 0.9)
				const py = floor(y + squareSize * 0.1 + random() * squareSize * 0.9)
				context.fillRect(px, py, 4, 4)
			}
		}
	}
}

export { points1 }
export default points1
