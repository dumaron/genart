import { ColorFilter } from '../types'

const { floor, min } = Math

type Args = {
	// limit: number
	// multiplier1: number
	// multiplier2: number
	// multiplier3: number
}

/**
 * Calls the transformer in input with pixels with different colors
 * @param args
 */
const color6: ColorFilter<Args> = (args) => (pixels) => {
	// const limit = args?.limit || 400
	// const multiplier1 = args?.multiplier1 || 0.5
	// const multiplier2 = args?.multiplier2 || 0.5
	// const multiplier3 = args?.multiplier3 || 0.5
	let i

	for (i = 0; i < pixels.length; i += 4) {

		if (pixels[i] < 200) {
			// pixels[i] = floor(pixels[i] * 1.1)
			pixels[i + 1] = floor(pixels[i + 1] * 0.8)
			pixels[i + 2] = floor(pixels[i + 2] * 0.9)
		} else if (pixels[i] < 100) {
			// pixels[i] = floor(pixels[i] * 1.3)
			pixels[i + 1] = floor(pixels[i + 1] * 0.9)
			pixels[i + 2] = floor(pixels[i + 2] * 0.9)
		} else {
			pixels[i] = floor(pixels[i] * 0.8)
			pixels[i + 1] = floor(pixels[i + 1] * 0.8)
			pixels[i + 2] = floor(pixels[i + 2] * 1.3)
		}

		pixels[i] = min(255, pixels[i])
		pixels[i + 1] = min(255, pixels[i + 1])
		pixels[i + 2] = min(255, pixels[i + 2])
	}

	return pixels
}

export { color6 }
