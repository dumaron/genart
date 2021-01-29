import { ColorFilter } from '../types'

const { min } = Math

type Args = {}

/**
 * Calls the transformer in input with pixels with different colors
 * @param args
 */
const old3: ColorFilter<Args> = (args) => (pixels) => {
	let i
	const limit = 160
	const c = 1.4

	for (i = 0; i < pixels.length; i += 4) {
		let m = min(pixels[i], pixels[i + 1], pixels[i + 2])
		pixels[i + 1] = pixels[i + 2] = m
		pixels[i] = pixels[i] > limit ? m * c : m
	}

	return pixels
}

export { old3 }
