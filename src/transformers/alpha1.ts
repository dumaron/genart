import { Transformer } from '../types'
import { pixelIndex, rgbToHex } from '../utils/utils'

const { floor, random, PI } = Math

type Args = {
	iterations: number
	maxWidth: number
	minWidth: number
	// fixedAngle: number
}

const alpha1: Transformer<Args> = (args) => (
	context,
	width,
	height,
	pixels
) => {
	let i
	const iterations = args?.iterations || 50000
	const maxWidth = args?.maxWidth || 200
	const minWidth = args?.minWidth || 0

	for (i = 0; i < iterations; i += 1) {
		const x = floor(random() * width)
		const y = floor(random() * height)
		const side = floor(random() * (maxWidth - minWidth)) + minWidth
		// const degrees = args?.fixedAngle || random() * 360
		// const radians = (degrees * PI) / 180
		const index = pixelIndex(x, y, width)
		const alpha = pixels[index + 3]

		if (alpha === 0) {
			continue
		}

		context.fillStyle = rgbToHex(
			pixels[index],
			pixels[index + 1],
			pixels[index + 2]
		)
		
		context.globalAlpha = random()

		context.save()
		context.translate(x + side / 2, y + side / 2)
		// context.rotate(radians)
		context.fillRect(-side / 2, -side / 2, side, side)
		context.restore()
	}
}

export { alpha1 }
export default alpha1
