import { Transformer } from '../types'
import { pixelIndex, rgbToHex } from '../utils/utils'

const { floor, random } = Math

type Args = {
	divider: number
	minAngle: number
	maxAngle: number
	sideIncrease: number
}

const squares4: Transformer<Args> = (args) => (
	context,
	width,
	height,
	pixels
) => {
	const divider = args?.divider || 300
	const minAngle = args?.minAngle || 0
	const maxAngle = args?.maxAngle || 360
	const sideIncrease = args?.sideIncrease || 0
	const side = floor(width / divider)
	const heightLimit = height / side
	let column, row

	for (row = 0; row < heightLimit; row += 1) {
		for (column = 0; column < divider; column += 1) {
			let x = side * column
			let y = side * row
			const index = pixelIndex(x, y, width)
			const radians = random() * (maxAngle - minAngle) + minAngle
			const finalSide = side + sideIncrease
			const move = random() < 0.2
			
			if (move) {
				x += random() * divider * 2
				y -= random() * divider * 2
			}

			context.save()
			context.fillStyle = rgbToHex(
				pixels[index],
				pixels[index + 1],
				pixels[index + 2]
			)
			context.translate(x + finalSide / 2, y + finalSide / 2)
			context.rotate(radians)
			context.fillRect(-finalSide / 2, -finalSide / 2, finalSide, finalSide)
			context.restore()
		}
	}
}

export { squares4 }
export default squares4
