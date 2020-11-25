import { Transformer } from '../types'
import { pick, pixelIndex } from '../utils/utils'
import { mean } from 'simple-statistics'

const { floor, max } = Math

type Args = {
	divider: number
	limit: number // inferiore a 1 tendenzialmente, spesso fra .2 e .4
	focusX: number // percentuale
	color: string
}

const neighborhood1: Transformer<Args> = (args) => (
	context,
	width,
	height,
	pixels
) => {
	const divider = args?.divider || 600
	const limit = args?.limit || .3
	const focusX = args?.focusX || .5
	const color = args?.color || 'black'
	
	const side = floor(width / divider)
	const heightLimit = floor(height / side)
	const points: [number, number][] = []
	const lines : [number, number, number, number][] = []
 	const focusXWidth = width * focusX
	let column, row, i, j

	for (row = 0; row < heightLimit; row += 1) {
		for (column = 0; column < divider; column += 1) {
			const x = side * column
			const y = side * row
			const avgs: number[] = []

			for (i = 0; i < side; i += 1) {
				for (j = 0; j < side; j += 1) {
					const index = pixelIndex(x + i, y + j, width)
					avgs.push(
						floor(
							(pixels[index] + pixels[index + 1] + pixels[index + 2]) / 3
						)
					)
				}
			}

			const diffs: number[] = avgs.sort().map((m2, i) => {
				const m1 = avgs[max(i - 1, 0)]
				return m2 - m1
			})

			const m = mean(diffs)

			if (m > limit) {
				points.push([x, y])
			}
		}
	}
	
	// per convenienza trovo i due gruppi di punti separati rispetto al focus sulle x
	const beforeFocus = points.filter(([x]) => x < focusXWidth);
	const afterFocus = points.filter(([x]) => x > focusXWidth);
	
	beforeFocus.forEach(([x, y]) => {
		const [nx, ny] = pick(afterFocus)
		lines.push([x, y, nx, ny])
	})
	afterFocus.forEach(([x, y]) => {
		const [nx, ny] = pick(beforeFocus)
		lines.push([x, y, nx, ny])
	})
	
	context.strokeStyle = color;
	
	lines.forEach(([x1, y1, x2, y2]) => {
		context.beginPath()
		context.moveTo(x1, y1)
		context.lineTo(x2, y2)
		context.stroke()
		context.closePath()
	})
	
}

export { neighborhood1 }
export default neighborhood1
