import { ColorFilter } from '../types'

type Args = {
	limit: number
	multiplier1: number
	multiplier2: number
	multiplier3: number
}

/**
 * Calls the transformer in input with pixels with different colors
 * @param args
 */
const color3: ColorFilter<Args> = (args) => (pixels) => {
	const limit = args?.limit || 400
	const multiplier1 = args?.multiplier1 || 0.5
	const multiplier2 = args?.multiplier2 || 0.5
	const multiplier3 = args?.multiplier3 || 0.5
	let i

	for (i = 0; i < pixels.length; i += 4) {
		const test = pixels[0] + pixels[1] + pixels[2]

		if (test < limit) {
			pixels[i] = Math.floor(pixels[i] * multiplier1)
			pixels[i + 1] = Math.floor(pixels[i + 1] * multiplier2)
			pixels[i + 2] = Math.floor(pixels[i + 2] * multiplier3)
		}
	}

	return pixels
}

export { color3 }
