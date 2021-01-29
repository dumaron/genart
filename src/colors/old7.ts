import { ColorFilter } from '../types'

const { min } = Math

type Args = {}

/**
 * Calls the transformer in input with pixels with different colors
 * @param args
 */
const old7: ColorFilter<Args> = (args) => (pixels) => {
	let i

	for (i = 0; i < pixels.length; i += 4) {
		pixels[i] = 255
		pixels[i + 1] = 0
	}

	return pixels
}

export { old7 }
