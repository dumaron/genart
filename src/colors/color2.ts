import { ColorFilter } from '../types'

/**
 * Calls the transformer in input with pixels with different colors
 * @param pixels
 */
const color2: ColorFilter = (pixels) => {
	let i

	for (i = 0; i < pixels.length; i += 4) {
		const test = pixels[0] + pixels[1] + pixels[2]

		pixels[i] = pixels[i]

		if (test < 600) {
			pixels[i + 2] = Math.floor(pixels[i + 1] * 0.7)
		}
	}

	return pixels
}

export { color2 }
