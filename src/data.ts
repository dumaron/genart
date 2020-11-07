import { Filter } from './types'
import f1 from './filters/f1'

const images: ReadonlyArray<string> = ['/home/duma/foto/102D3500/DSC_0643.JPG']

const filters: { [name: string]: Filter } = {
	color1: f1,
}

export { images, filters }
