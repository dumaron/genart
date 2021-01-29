import { Transformer } from '../types'
import { pixelIndex, rgbToHex } from '../utils/utils'

const { floor, random } = Math

type Args = {}

const oldSquares3: Transformer<Args> = (args) => (
	context,
	width,
	height,
	pixels
) => {
	const magicNumber = width / 40
	let x, y

	for (x = 0; x <= width; x += magicNumber) {
		for (y = 0; y <= height; y += magicNumber) {
			const index = pixelIndex(floor(x), floor(y), width)
			const side = magicNumber * 4 * random()
			context.beginPath()
			context.rect(x, y, side, side + side * random())
			context.fillStyle = rgbToHex(
				pixels[index],
				pixels[index + 1],
				pixels[index + 2]
			)
			context.fill()
			context.closePath()
		}
	}
}

export { oldSquares3 }
export default oldSquares3
