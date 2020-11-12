import { Transformer } from '../types'
import { ImageData } from 'canvas'

const copyPixels: Transformer = (context, width, height, pixels) => {
	const imageData = new ImageData(pixels, width, height)
	context.putImageData(imageData, 0, 0)
}

export { copyPixels }
export default copyPixels
