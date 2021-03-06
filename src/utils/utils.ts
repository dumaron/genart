import { createCanvas, Image, Canvas } from 'canvas'
import { promises } from 'fs'
import { config } from '../config'
import { BindedTransformer } from '../types'
import { mean } from 'simple-statistics'

const { floor, random } = Math

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

const rgbToHex = (r: number, g: number, b: number): string =>
	'#' +
	r.toString(16).padStart(2, '0') +
	g.toString(16).padStart(2, '0') +
	b.toString(16).padStart(2, '0')

const join = (filters: ReadonlyArray<BindedTransformer>): BindedTransformer => (
	...args
) => {
	filters.forEach((filter) => filter(...args))
}

const pipe = (filters: ReadonlyArray<BindedTransformer>): BindedTransformer => (
	context,
	width,
	height,
	pixels
) => {
	let i
	let localPixels = pixels

	for (i = 0; i < filters.length; i += 1) {
		filters[i](context, width, height, localPixels)

		if (i < filters.length - 1) {
			localPixels = context.getImageData(0, 0, width, height).data
		}
	}
}

const pixelIndex = (x: number, y: number, width: number): number =>
	(y * width + x) * 4

const pick = (array: any[]): any => array[floor(array.length * random())]

const averagePixel = (
	pixels: Uint8ClampedArray,
	x: number,
	y: number,
	width: number,
	height: number,
	canvasWidth: number
): [number, number, number] => {
	let i, j

	let rs: number = 0
	let gs: number = 0
	let bs: number = 0

	for (i = 0; i < width; i += 1) {
		for (j = 0; j < height; j += 1) {
			const index = pixelIndex(x + i, y + j, canvasWidth)
			rs += pixels[index]
			gs += pixels[index + 1]
			bs += pixels[index + 2]
		}
	}

	return [rs / (width * height), gs / (width * height), bs / (width * height)]
}

const minIndex = (array: number[]): number =>
	array.indexOf(Math.min.apply(this, array))

export {
	getPixels,
	saveImage,
	getName,
	rgbToHex,
	join,
	pipe,
	pixelIndex,
	pick,
	averagePixel,
	minIndex,
}
