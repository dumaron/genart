import { Transformer } from '../types'

type Args = {
	color: string
}

const fill: Transformer<Args> = (args) => (context, width, height) => {
	context.fillStyle = args?.color || '#696969'
	context.fillRect(0, 0, width, height)
}

export { fill }
