import { ColorApplier } from '../types'

const applyColor: ColorApplier = (filter, transformer) => (
	context,
	width,
	height,
	pixels
) => {
	const newPixels = filter(pixels.slice(0))
	transformer(context, width, height, newPixels)
}

export { applyColor }
