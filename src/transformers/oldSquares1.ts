import { Transformer } from '../types'
import { pixelIndex, rgbToHex } from '../utils/utils'

const { floor } = Math

type Args = {}

const squares1: Transformer<Args> = (args) => (
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
			context.beginPath()
			context.rect(x, y, magicNumber, magicNumber)
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

export { squares1 }
export default squares1
