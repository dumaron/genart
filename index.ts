import { rmdirSync, mkdirSync, existsSync } from 'fs'
import { createCanvas, loadImage } from 'canvas'
import { filters, images } from './src/data'
import { getName, getPixels, saveImage } from './src/utils'
import { execSync } from 'child_process'
import { config } from './src/config'

const { buildPath } = config

// deletes all previous images: every execution re-create all the images
// if (existsSync(buildPath)) {
// 	rmdirSync(buildPath, { recursive: true })
// }
// mkdirSync(buildPath)

images.forEach(async (path) => {
	const image = await loadImage(path)
	const imageName = getName(path)
	const { width, height } = image
	const rgba = getPixels(image)

	Object.entries(filters).forEach(([filterName, filter], index) => {
		console.log(`Processing image ${imageName} with filter ${filterName}`)
		const canvas = createCanvas(width, height)
		const context = canvas.getContext('2d')
		filter(context, width, height, rgba)
		saveImage(`${imageName}_${index}`, canvas)
	})
})
