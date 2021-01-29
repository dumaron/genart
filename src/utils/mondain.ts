import { Rectangle } from '../types'

const splitOnX = (
	square: Rectangle,
	splitAt: number,
	squares: Rectangle[]
): void => {
	const squareA = {
		x: square.x,
		y: square.y,
		width: square.width - (square.width - splitAt + square.x),
		height: square.height,
	}

	const squareB = {
		x: splitAt,
		y: square.y,
		width: square.width - splitAt + square.x,
		height: square.height,
	}

	squares.push(squareA)
	squares.push(squareB)
}

const splitOnY = (
	square: Rectangle,
	splitAt: number,
	squares: Rectangle[]
): void => {
	const squareA = {
		x: square.x,
		y: square.y,
		width: square.width,
		height: square.height - (square.height - splitAt + square.y),
	}

	const squareB = {
		x: square.x,
		y: splitAt,
		width: square.width,
		height: square.height - splitAt + square.y,
	}

	squares.push(squareA)
	squares.push(squareB)
}

const splitSquaresWith = (
	coordinates: { x?: number; y?: number },
	rectangles: Rectangle[]
): void => {
	const { x, y } = coordinates
	let i

	for (i = rectangles.length - 1; i >= 0; i--) {
		const square = rectangles[i]

		if (x && x > square.x && x < square.x + square.width) {
			rectangles.splice(i, 1)
			splitOnX(square, x, rectangles)
		}

		if (y && y > square.y && y < square.y + square.height) {
			rectangles.splice(i, 1)
			splitOnY(square, y, rectangles)
		}
	}
}

export { splitSquaresWith }
