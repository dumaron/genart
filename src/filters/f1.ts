import { Filter } from '../types'

const f1: Filter = (context, width, height, pixels) => {
	const img = context.getImageData(0, 0, width, height)
	const newPixels = img.data
	let i: number

	for (i = 0; i < pixels.length; i += 4) {
		const test = pixels[0] + pixels[1] + pixels[2]

		newPixels[i] = pixels[0]
		newPixels[i + 1] = pixels[i + 1]
		newPixels[i + 2] = pixels[i + 2]
		newPixels[i + 3] = 255

		if (test < 400) {
			newPixels[i + 1] = Math.floor(newPixels[i + 1] * 0.5)
		}
	}

	context.putImageData(img, 0, 0)
}

export { f1 }
export default f1
