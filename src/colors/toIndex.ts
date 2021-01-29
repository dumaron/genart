import { ColorFilter } from '../types'
import { minIndex } from '../utils/utils'

const { abs } = Math

type Args = {
	colors: ReadonlyArray<[number, number, number]>
}

/**
 * Calls the transformer in input with pixels with different colors
 * @param args
 */
const toIndex: ColorFilter<Args> = (args) => (pixels) => {
	const colors = args?.colors || [
		[0, 0, 0],
		[255, 255, 255],
	]
	let i

	const colorIndexes = colors.map(([r, g, b]) => r + g + b - 40)

	for (i = 0; i < pixels.length; i += 4) {
		const currentIndex = pixels[i] + pixels[i + 1] + pixels[i + 2]
		const differences = colorIndexes.map((index) => abs(index - currentIndex))
		const mostEqualColorIndex = minIndex(differences)
		const chosenColor = colors[mostEqualColorIndex]
		pixels[i] = chosenColor[0]
		pixels[i + 1] = chosenColor[1]
		pixels[i + 2] = chosenColor[2]
	}

	return pixels
}

export { toIndex }
