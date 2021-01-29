import { Rectangle, Transformer } from '../types'
import { pixelIndex, rgbToHex } from '../utils/utils'
import { splitSquaresWith } from '../utils/mondain'

const { floor, min, random } = Math

type Args = {
	divider: number
}

const mondrain1: Transformer<Args> = (args) => (
	context,
	width,
	height,
	pixels
) => {
	const divider = args?.divider || 15
	const squareSize = floor(width / divider)
	const heightLimit = height / squareSize
	let column, row

	for (row = 0; row < heightLimit; row += 1) {
		const rowIsOdd = row % 2 === 1

		for (column = 0; column < divider - (rowIsOdd ? 1 : 0); column += 1) {
			const x = squareSize * column + (rowIsOdd ? squareSize / 2 : 0)
			const y = squareSize * row
			const index = pixelIndex(x, y, width)
			const alpha = pixels[index + 3]
			let i

			if (alpha !== 0) {
				const rectangles: Rectangle[] = [
					{
						x: 0,
						y: 0,
						width: squareSize,
						height: squareSize,
					},
				]
				const step = floor(squareSize / 6)

				for (i = 0; i <= squareSize; i += step) {
					if (random() > 0.3) {
						splitSquaresWith({ x: i }, rectangles)
					}
					if (random() > 0.3) {
						splitSquaresWith({ y: i }, rectangles)
					}
				}

				rectangles.forEach((r) => {
					const nx = min(x + r.x, width - 1)
					const ny = min(y + r.y, height - 1)
					const subIndex = pixelIndex(nx, ny, width)
					context.fillStyle = rgbToHex(
						pixels[subIndex],
						pixels[subIndex + 1],
						pixels[subIndex + 2]
					)

					context.fillRect(x + r.x, y + r.y, r.width, r.height)
				})
			}
		}
	}
}

export { mondrain1 }
export default mondrain1
