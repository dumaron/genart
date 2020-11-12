import { ColorFilter } from '../types'

/**
 * Calls the transformer in input with pixels with different colors
 * @param pixels
 */
const color1: ColorFilter = (pixels) => {
	let i

	for (i = 0; i < pixels.length; i += 4) {
		const test = pixels[0] + pixels[1] + pixels[2]

		pixels[i] = pixels[0]
		pixels[i + 2] = pixels[i + 1]

		if (test < 400) {
			pixels[i + 1] = Math.floor(pixels[i + 1] * 0.5)
		}
	}

	return pixels
}

export { color1 }
