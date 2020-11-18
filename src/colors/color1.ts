import { ColorFilter } from '../types'

type Args = {
	index: 0 | 1 | 2
	limit: number
	multiplier: number
}

/**
 * Calls the transformer in input with pixels with different colors
 * @param args
 */
const color1: ColorFilter<Args> = (args) => (pixels) => {
	const index = args?.index || 1
	const limit = args?.limit || 400
	const multiplier = args?.multiplier || 0.5
	let i

	for (i = 0; i < pixels.length; i += 4) {
		const test = pixels[0] + pixels[1] + pixels[2]

		pixels[i] = pixels[0]
		pixels[i + 2] = pixels[i + 1]

		if (test < limit) {
			pixels[i + index] = Math.floor(pixels[i + index] * multiplier)
		}
	}

	return pixels
}

export { color1 }
