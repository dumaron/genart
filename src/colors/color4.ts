import { ColorFilter } from '../types'

const { floor } = Math

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
const color4: ColorFilter<Args> = (args) => (pixels) => {
	// const limit = args?.limit || 400
	// const multiplier1 = args?.multiplier1 || 0.5
	// const multiplier2 = args?.multiplier2 || 0.5
	// const multiplier3 = args?.multiplier3 || 0.5
	let i

	for (i = 0; i < pixels.length; i += 4) {
		if (pixels[i] > 150) {
			pixels[i] = floor(pixels[i] * 1.1)
		} else {
			pixels[i + 1] = floor(pixels[i + 1] * 0.9)
		}
	}

	return pixels
}

export { color4 }
