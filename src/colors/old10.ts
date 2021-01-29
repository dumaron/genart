import { ColorFilter } from '../types'

const { min } = Math

type Args = {}

/**
 * Calls the transformer in input with pixels with different colors
 * @param args
 */
const old10: ColorFilter<Args> = (args) => (pixels) => {
	let i

	for (i = 0; i < pixels.length; i += 4) {
		let m = min(pixels[i], pixels[i + 1], pixels[i + 2])
		pixels[i] = pixels[i + 1] = m * 4
		pixels[i + 2] = min(255, m * 6)
	}

	return pixels
}

export { old10 }
