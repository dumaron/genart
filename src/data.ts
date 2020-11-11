import { Filter } from './types'
import f1 from './filters/f1'
import { circle1 } from './filters/circle1'
import { pipe } from './utils'

const images: ReadonlyArray<string> = ['/home/duma/foto/102D3500/DSC_0643.JPG']

const filters: { [name: string]: Filter } = {
	color1: f1,
	circles1: circle1,
	mix1: pipe([f1, circle1]),
}

export { images, filters }
