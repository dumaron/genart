import { existsSync, mkdirSync } from 'fs'
import { createCanvas, loadImage } from 'canvas'
import { config } from './src/config'
import { transformers, images } from './src/data'
import { getName, getPixels, saveImage } from './src/utils/utils'

const { buildPath } = config

if (!existsSync(buildPath)) {
	mkdirSync(buildPath)
}

images.forEach(async (path) => {
	const image = await loadImage(path)
	const imageName = getName(path)
	const { width, height } = image
	const rgba = getPixels(image)

	Object.entries(transformers).forEach(([transformerName, fn], index) => {
		const canvas = createCanvas(width, height)
		const context = canvas.getContext('2d')
		
		console.log(`Processing image ${imageName} with transformer ${transformerName}`)
		
		fn(context, width, height, rgba)
		saveImage(`${imageName}_${index}`, canvas)
	})
})
