import { ColorFilter } from '../types'

const { min, log } = Math

type Args = {}

/**
 * Calls the transformer in input with pixels with different colors
 * @param args
 */
const old8: ColorFilter<Args> = (args) => (pixels) => {
	let i

	for (i = 0; i < pixels.length; i += 4) {
		let m = min(pixels[i], pixels[i + 1], pixels[i + 2])
		pixels[i + 1] = pixels[i + 2] = m
		pixels[i] += log(m * 2)
	}

	return pixels
}

export { old8 }
