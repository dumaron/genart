import { Transformer } from '../types'
import { pixelIndex, rgbToHex } from '../utils/utils'

const { floor, random, PI } = Math

type Args = {
	iterations: number
	radiusMultiplier: number
}

const circle1: Transformer<Args> = (args) => (
	context,
	width,
	height,
	pixels
) => {
	let i
	const iterations = args?.iterations || 50000
	const radiusMultiplier = args?.radiusMultiplier || 20

	for (i = 0; i < iterations; i += 1) {
		const x = floor(random() * width)
		const y = floor(random() * height)
		const radius = floor(random() * radiusMultiplier)
		const index = pixelIndex(x, y, width)

		context.fillStyle = rgbToHex(
			pixels[index],
			pixels[index + 1],
			pixels[index + 2]
		)
		context.beginPath()
		context.arc(x - radius, y - radius, radius, 0, 2 * PI)
		context.fill()
		context.closePath()
	}
}

export { circle1 }
export default circle1
