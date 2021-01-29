import { ColorFilter } from '../types'

const { min } = Math

type Args = {}

/**
 * Calls the transformer in input with pixels with different colors
 * @param args
 */
const old5: ColorFilter<Args> = (args) => (pixels) => {
	let i

	for (i = 0; i < pixels.length; i += 4) {
		let distance =
			(pixels[i] - pixels[i + 1] + (pixels[i] - pixels[i + 2])) / 2
		pixels[i] *= distance > 20 ? 1.1 : 0.9
	}

	return pixels
}

export { old5 }
