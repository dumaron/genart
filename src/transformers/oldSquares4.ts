import { Transformer } from '../types'
import { pixelIndex, rgbToHex } from '../utils/utils'

const { floor, abs, random } = Math

type Args = {}

const oldSquares4: Transformer<Args> = (args) => (
	context,
	width,
	height,
	pixels
) => {
	const magicNumber = width / 80
	const limit = 30
	const squares = []
	const step = 50

	let x, y, i

	for (x = 0; x < width; x += magicNumber)
		for (y = 0; y < height; y += magicNumber) {
			if (x + step > width) continue

			const index = pixelIndex(floor(x), floor(y), width)
			const nextIndex = pixelIndex(floor(x) + step, floor(y), width)

			const diffR = abs(pixels[index] - pixels[nextIndex])
			const diffG = abs(pixels[index + 1] - pixels[nextIndex + 1])
			const diffB = abs(pixels[index + 2] - pixels[nextIndex + 2])
			// const minNext = min(
			// 	pixels[nextIndex],
			// 	pixels[nextIndex + 1],
			// 	pixels[nextIndex + 2]
			// )
			const avgDiff = (diffB + diffG + diffR) / 3

			if (avgDiff > limit) {
				squares.push({
					x: floor(x),
					y: floor(y),
					color: rgbToHex(diffR * 3, diffG * 2, diffB * 2),
				})
			}
		}

	for (i = 0; i < pixels.length; i += 4) {
		pixels[i] = pixels[i + 1] = pixels[i + 2] = pixels[i + 3] = 255
	}

	// context.putImageData(img, 0, 0)

	for (i = 0; i < squares.length; i++) {
		const side = magicNumber * 2 * random()
		context.beginPath()
		context.rect(squares[i].x, squares[i].y, side, side)
		context.fillStyle = squares[i].color
		context.fill()
		context.closePath()
	}
}

export { oldSquares4 }
export default oldSquares4
