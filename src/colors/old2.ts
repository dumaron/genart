import { ColorFilter } from '../types'

const { max } = Math

type Args = {}

/**
 * Calls the transformer in input with pixels with different colors
 * @param args
 */
const old2: ColorFilter<Args> = (args) => (pixels) => {
	let i

	for (i = 0; i < pixels.length; i += 4) {
		pixels[i] = max(pixels[i], pixels[i + 1], pixels[i + 2])
	}

	return pixels
}

export { old2 }
