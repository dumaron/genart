import { Rectangle, Transformer } from '../types'
import { averagePixel, pixelIndex, rgbToHex } from '../utils/utils'

const { floor, random, abs, ceil } = Math

type Args = {
	divider: number
}

const squares8: Transformer<Args> = (args) => (
	context,
	width,
	height,
	pixels
) => {
	const divider = args?.divider || 30
	const squareSize = floor(width / divider)
	const heightLimit = height / squareSize
	let column,
		row,
		splitted = true

	let squares: Rectangle[] = []

	for (row = 0; row < heightLimit; row += 1) {
		for (column = 0; column < divider; column += 1) {
			squares.push({
				x: column * squareSize,
				y: row * squareSize,
				width: squareSize,
				height: squareSize,
			})
		}
	}

	let newSquares: Rectangle[] = []
	
	while (splitted) {
		newSquares = []
		splitted = false

		squares.forEach((s) => {
			if (s.width < 40) {
				newSquares.push(s)
				return
			}
			
			const avg1 = averagePixel(
				pixels,
				s.x,
				s.y,
				s.width / 2,
				s.height / 2,
				width
			)
			const avg2 = averagePixel(
				pixels,
				s.x + s.width / 2,
				s.y,
				s.width / 2,
				s.height / 2,
				width
			)
			const avg3 = averagePixel(
				pixels,
				s.x + s.width / 2,
				s.y + s.height / 2,
				s.width / 2,
				s.width / 2,
				width
			)
			const avg4 = averagePixel(
				pixels,
				s.x,
				s.y + s.height / 2,
				s.width / 2,
				s.height / 2,
				width
			)

			const m1 = (avg1[0] + avg1[1] + avg1[2]) / 3
			const m2 = (avg2[0] + avg2[1] + avg2[2]) / 3
			const m3 = (avg3[0] + avg3[1] + avg3[2]) / 3
			const m4 = (avg4[0] + avg4[1] + avg4[2]) / 3
			const tmp = [avg1, avg2, avg3, avg4].map(([r, g, b]) => r + g + b)
			const oneTransparent = tmp.some((c) => c === 0)
			const oneNotTransparent = tmp.some((c) => c !== 0)

			const limit = 20

			if (
				abs(m1 - m2) > limit ||
				abs(m1 - m3) > limit ||
				abs(m1 - m4) > limit ||
				abs(m2 - m3) > limit ||
				abs(m2 - m4) > limit ||
				abs(m3 - m4) > limit ||
				(oneTransparent && oneNotTransparent)
			) {
				const w2 = ceil(s.width / 2)
				const h2 = ceil(s.height / 2)

				splitted = true
				newSquares.push(
					{ x: s.x, y: s.y, width: w2, height: h2 },
					{
						x: s.x + w2,
						y: s.y,
						width: w2,
						height: h2,
					},
					{
						x: s.x,
						y: s.y + h2,
						width: w2,
						height: h2,
					},
					{
						x: s.x + w2,
						y: s.y + h2,
						width: w2,
						height: h2,
					}
				)
			} else {
				newSquares.push(s)
			}
		})
		
		if (splitted) {
			squares = newSquares
		}
		
	}

	squares.forEach((s) => {
		const index = pixelIndex(s.x, s.y, width)
		const alpha = pixels[index + 3]

		if (alpha === 0) {
			// context.clearRect(s.x, s.y, s.width, s.height)
		} else {
			context.fillStyle = rgbToHex(
				pixels[index],
				pixels[index + 1],
				pixels[index + 2]
			)
			context.fillRect(s.x, s.y, s.width, s.height)
		}
	})
}

export { squares8 }
export default squares8
