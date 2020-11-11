import { createCanvas, loadImage } from 'canvas'
import { filters, images } from './src/data'
import { getName, getPixels, saveImage } from './src/utils'
import { config } from './src/config'
import { existsSync, mkdirSync } from 'fs'

const { buildPath } = config

if (!existsSync(buildPath)) {
	mkdirSync(buildPath)
}

images.forEach(async (path) => {
	const image = await loadImage(path)
	const imageName = getName(path)
	const { width, height } = image
	const rgba = getPixels(image)

	Object.entries(filters).forEach(([filterName, filter], index) => {
		const canvas = createCanvas(width, height)
		const context = canvas.getContext('2d')
		
		console.log(`Processing image ${imageName} with filter ${filterName}`)
		
		filter(context, width, height, rgba)
		saveImage(`${imageName}_${index}`, canvas)
	})
})
