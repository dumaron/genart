import { ColorFilter } from '../types'

type Args = {}

/**
 * Calls the transformer in input with pixels with different colors
 * @param args
 */
const old9: ColorFilter<Args> = (args) => (pixels) => {
	let i

	for (i = 0; i < pixels.length; i += 4) {
		const distance =
			(pixels[i] - pixels[i + 1] + (pixels[i] - pixels[i + 2])) / 2
		
		pixels[i] += distance * 1.4
		pixels[i + 1] += distance * 0.9
	}

	return pixels
}

export { old9 }
