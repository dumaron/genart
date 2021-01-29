import { BindedTransformer } from './types'
import { circle1 } from './transformers/circle1'
import { color1 } from './colors/color1'
import { applyColor } from './utils/colors'
import { color2 } from './colors/color2'
import copyPixels from './transformers/copyPixels'
import { join, pipe } from './utils/utils'
import { color3 } from './colors/color3'
import squares2 from './transformers/squares2'
import squares1 from './transformers/squares1'
import { fill } from './transformers/fill'
import squares3 from './transformers/squares3'
import squares4 from './transformers/squares4'
import neighborhood1 from './transformers/neighborhood1'
import squares5 from './transformers/squares5'
import { color4 } from './colors/color4'
import { color5 } from './colors/color5'
import { color6 } from './colors/color6'
import points1 from './transformers/points1'
import points2 from './transformers/points2'
import { color7 } from './colors/color7'
import squares7 from './transformers/squares7'
import alpha1 from './transformers/alpha1'
import { old1 } from './colors/old1'
import { old2 } from './colors/old2'
import { old3 } from './colors/old3'
import { old5 } from './colors/old5'
import { old6 } from './colors/old6'
import { old7 } from './colors/old7'
import { old8 } from './colors/old8'
import { old9 } from './colors/old9'
import { old10 } from './colors/old10'
import oldSquares1 from './transformers/oldSquares1'
import oldSquares2 from './transformers/oldSquares2'
import oldSquares3 from './transformers/oldSquares3'
import oldSquares4 from './transformers/oldSquares4'
import mondrain1 from './transformers/mondrain'
import squares8 from './transformers/squares8'
import { toIndex } from './colors/toIndex'
import squares9 from './transformers/squares9'

const images: ReadonlyArray<string> = [
	// '/home/duma/foto/102D3500/DSC_0643.JPG',
	// '/home/duma/Pictures/2020/2020-02-16_16-00-50.jpg',
	// '/home/duma/Pictures/2020/2020-02-16_16-04-08.jpg',
	// '/home/duma/Pictures/2020/2020-02-16_16-04-08_1.jpg',
	// '/home/duma/Pictures/2020/2020-02-16_16-04-08_2.jpg',
	// '/home/duma/Pictures/2020/2020-02-16_16-04-09.jpg',
	// '/home/duma/Pictures/2020/2020-02-16_16-04-10.jpg',
	// '/home/duma/Pictures/2020/2020-02-16_16-04-12.jpg',
	// '/home/duma/Pictures/2020/2020-02-16_16-04-42.jpg',
	// '/home/duma/Pictures/2020/2020-02-16_16-04-42_1.jpg',
	// '/home/duma/Pictures/2020/2020-02-16_16-07-22.jpg',
	// '/home/duma/Pictures/2020/2020-02-16_16-04-53.jpg',
	// '/home/duma/Pictures/2020/test1.png',
	'/home/duma/Pictures/2020/test2.png',
	'/home/duma/Pictures/2020/test3.png',
]

const pink1 = color3({
	multiplier3: 0.9,
	multiplier2: 0.9,
	multiplier1: 1.1,
	limit: 700,
})

const divider = 100

const transformers: { [name: string]: BindedTransformer } = {
	54: join([
		fill({ color: '#ffeebb' }),
		applyColor(
			toIndex({
				colors: [
					[298, 199, 57],
					[247, 154, 52],
					[253, 232, 179],
					[12, 56, 106],
					[255, 100, 52],
				],
			}),
			squares9({
				divider: 100,
				fill: '#ffeebb'
			})
		),
	]),
	// f1: applyColor(old9(), join([squares5({ divider }), squares5({ divider })])),
	// f2: applyColor(old9(), join([squares5({ divider }), squares5({ divider })])),
	// f3: applyColor(old9(), join([squares5({ divider }), squares5({ divider })])),
	// f4: applyColor(old9(), join([squares5({ divider }), squares5({ divider })])),
	// f5: applyColor(old9(), join([squares5({ divider }), squares5({ divider })])),
	// f6: applyColor(old9(), join([squares5({ divider }), squares5({ divider })])),
	// f7: applyColor(old9(), join([squares5({ divider }), squares5({ divider })])),
	// f8: applyColor(old9(), join([squares5({ divider }), squares5({ divider })])),
	// f9: applyColor(old9(), join([squares5({ divider }), squares5({ divider })])),
	// f11: applyColor(old9(), pipe([squares5({ divider }), squares5({ divider }), squares5({ divider })])),
	// f12: applyColor(old9(), pipe([squares5({ divider }), squares5({ divider }), squares5({ divider })])),
	// f13: applyColor(old9(), squares5({ divider })),
	// f14: applyColor(old9(), squares5({ divider })),
	// f15: applyColor(old9(), squares5({ divider })),
	// f16: applyColor(old9(), squares5({ divider })),
	// f17: applyColor(old9(), squares5({ divider })),
	// f18: applyColor(old9(), squares5({ divider })),
	// f19: applyColor(old9(), squares5({ divider })),
	// 53: pipe([applyColor(old9(), copyPixels()), squares8()]),
	// 52: applyColor(old9(), squares8()),
	// 51: applyColor(old6(), mondrain1()),
	// 50: applyColor(old6(), oldSquares4()),
	// 49: applyColor(old6(), oldSquares3()),
	// 48: applyColor(old6(), oldSquares2()),
	// 47: applyColor(old6(), oldSquares1()),
	// 46: applyColor(old10(), squares5({ divider: 60 })),
	// 45: applyColor(old9(), squares5({ divider })),
	// 44: applyColor(old8(), squares5({ divider })),
	// 43: applyColor(old7(), squares5({ divider: 60 })),
	// 42: applyColor(old6(), squares5({ divider })),
	// 41: applyColor(old5(), squares5({ divider })),
	// 40: applyColor(old3(), squares5({ divider })),
	// 39: applyColor(old2(), squares5({ divider })),
	// 38: applyColor(old1(), squares5({ divider })),
	// 37: applyColor(color3(), alpha1({iterations: 10000, minWidth: 100, maxWidth: 200})),
	// 36: applyColor(color4(), alpha1({iterations: 10000, minWidth: 100, maxWidth: 200})),
	// 35: applyColor(color6(), alpha1({iterations: 10000, minWidth: 100, maxWidth: 200})),
	// 34: applyColor(color5(), alpha1({iterations: 10000, minWidth: 100, maxWidth: 200})),
	// 33: applyColor(
	// 		color7(),
	// 		squares7({ iterations: 200000, maxWidth: 40, minWidth: 35 })
	// 	),
	// 32: applyColor(color7(), squares5({ divider: 60 })),
	// 31: applyColor(pink1, pipe([squares5({ divider: 60 })])),
	// 30: join([fill(), points2()]),
	// 29: join([fill(), points1()]),
	// 28: applyColor(test1, copyPixels()),
	// 27: applyColor(
	// 	color6(),
	// 	squares3({ iterations: 200000, minWidth: 40, maxWidth: 40 })
	// ),
	// 26: applyColor(
	// 	color7(),
	// 	squares4({ divider: 200, sideIncrease: 15, minAngle: 0, maxAngle: 45 })
	// ),
	// 25: applyColor(pink1, pipe([
	// 	squares5({ divider: 60 }),
	// ])),
	// 24: applyColor(
	// 	color2({ limit: 300, multiplier: 1.3 }),
	// 	squares5({ divider: 70 })
	// ),
	// 23: applyColor(
	// 	color2({ limit: 300, multiplier: 0.7 }),
	// 	squares5({ divider: 70 })
	// ),
	// 22: applyColor(color2({ limit: 200 }), squares5({ divider: 70 })),
	// 21: applyColor(color2({ limit: 100 }), squares5({ divider: 70 })),
	// 20: applyColor(color2({ index: 0 }), squares5({ divider: 70 })),
	// 19: applyColor(color2({ index: 2 }), squares5({ divider: 70 })),
	// 17: applyColor(color2({ index: 1 }), squares5({ divider: 70 })),
	// 16: applyColor(pink1, squares5({ divider: 70 })),
	// 15: applyColor(pink1, squares5({ divider: 70 })),
	// 14: join([
	// 	fill(),
	// 	neighborhood1({ limit: 0.3, color: '#606060' }),
	// 	neighborhood1({ limit: 0.4, color: '#535357' }),
	// 	neighborhood1({ limit: 0.5, color: '#232021' }),
	// 	neighborhood1({ limit: 0.5, color: '#121011' }),
	// ]),
	// 13: join([fill(), neighborhood1()]),
	// 12: applyColor(
	// 	pink1,
	// 	squares4({ divider: 200, minAngle: 10, maxAngle: 45, sideIncrease: 20 })
	// ),
	// 11: applyColor(
	// 	pink1,
	// 	squares3({ iterations: 80000, maxWidth: 150, minWidth: 30, fixedAngle: 30 })
	// ),
	// 8: join([
	// 	fill(),
	// 	applyColor(pink1, squares1({ iterations: 30000, maxWidth: 80 })),
	// ]),
	// 9: applyColor(pink1, squares3({ iterations: 50000, maxWidth: 100 })),
	// 10: applyColor(
	// 	pink1,
	// 	squares3({ iterations: 80000, maxWidth: 75, minWidth: 75 })
	// ),
	// 1: applyColor(color2(), copyPixels()),
	// 2: applyColor(color2(), circle1()),
	// 3: applyColor(
	// 	color2(),
	// 	join([
	// 		circle1({ iterations: 1000, radiusMultiplier: 500 }),
	// 		circle1({ iterations: 1000, radiusMultiplier: 100 }),
	// 		circle1({ iterations: 30000, radiusMultiplier: 20 }),
	// 	])
	// ),
	// 4: applyColor(
	// 	color1(),
	// 	join([
	// 		circle1({ iterations: 20000, radiusMultiplier: 100 }),
	// 		circle1({ iterations: 30000, radiusMultiplier: 25 }),
	// 	])
	// ),
	// 5: applyColor(
	// 	color2(),
	// 	join([
	// 		circle1({ iterations: 20000, radiusMultiplier: 100 }),
	// 		circle1({ iterations: 30000, radiusMultiplier: 25 }),
	// 	])
	// ),
	// 6: applyColor(
	// 	color3({
	// 		multiplier3: 0.9,
	// 		multiplier2: 0.9,
	// 		multiplier1: 1.1,
	// 		limit: 700,
	// 	}),
	// 	circle1({ radiusMultiplier: 30 })
	// ),
	// 7: applyColor(
	// 	color3({
	// 		multiplier3: 0.9,
	// 		multiplier2: 0.9,
	// 		multiplier1: 1.1,
	// 		limit: 700,
	// 	}),
	// 	squares2({ divider: 100 })
	// ),
}

export { images, transformers }
