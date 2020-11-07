import { createCanvas, Image, Canvas } from 'canvas'
import { promises } from 'fs'
import { config } from './config'

/**
 * Return the name (without the extension) of the image specified by the path
 * @param path The image path
 * @return The image name without the extension
 */
const getName = (path: string): string => {
	const imageName = path.split('/').pop()

	if (imageName === undefined) {
		throw new Error('Wrong image path:' + path)
	}

	return imageName.split('.')[0]
}

const getPixels = (image: Image) => {
	const { width, height } = image
	let canvas = createCanvas(width, height)
	let context = canvas.getContext('2d')
	context.clearRect(0, 0, width, height)
	context.drawImage(image, 0, 0, width, height)
	const rgba = context.getImageData(0, 0, width, height).data
	// @ts-ignore
	context = undefined
	// @ts-ignore
	canvas = undefined
	return rgba
}

const saveImage = async (name: string, canvas: Canvas): Promise<void> =>
	promises.writeFile(`${config.buildPath}/${name}.png`, canvas.toBuffer())

export { getPixels, saveImage, getName }
