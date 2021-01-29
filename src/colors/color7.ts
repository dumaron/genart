import { ColorFilter } from '../types'

const { min, max, random } = Math

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
const color7: ColorFilter<Args> = (args) => (pixels) => {
	let i

	for (i = 0; i < pixels.length; i += 4) {

		const m = min(pixels[i], pixels[i+1], pixels[i + 2])
		pixels[i + 1] = m
		pixels[i + 2] = m * 1.1
		
		if (pixels[i] < 150) {
			pixels[i] = m * 1.1
		} else {
			pixels[i] = m + (random() * (pixels[i] - m))
		}
		
	}

	return pixels
}

export { color7 }
