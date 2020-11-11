import { Filter } from '../types'
import { rgbToHex } from '../utils'

const circle1: Filter = (context, width, height, pixels) => {
	let i
	for (i = 0; i < 50000; i += 1) {
		const x = Math.floor(Math.random() * width)
		const y = Math.floor(Math.random() * height)
		const radius = Math.floor(Math.random() * 20)
		const pixelIndex = (y * width + x) * 4

		context.fillStyle = rgbToHex(
			pixels[pixelIndex],
			pixels[pixelIndex + 1],
			pixels[pixelIndex + 2]
		)
		context.beginPath()
		context.arc(x - radius, y - radius, radius, 0, 2 * Math.PI)
		context.fill()
		context.closePath()
	}
}

export { circle1 }
export default circle1
