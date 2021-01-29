import { ColorFilter } from '../types'

const { min } = Math

type Args = {}

/**
 * Calls the transformer in input with pixels with different colors
 * @param args
 */
const old1: ColorFilter<Args> = (args) => (pixels) => {
	let i

	for (i = 0; i < pixels.length; i += 4) {
		let m = min(pixels[i], pixels[i + 1], pixels[i + 2])
		pixels[i + 1] = pixels[i + 2] = m
		pixels[i] = m > 128 ? 200 : m
	}
	return pixels
}

export { old1 }
