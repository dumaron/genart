type ColorFilter = (rgba: Uint8ClampedArray) => Uint8ClampedArray

type Transformer = (
	context: CanvasRenderingContext2D,
	width: number,
	height: number,
	pixels: Uint8ClampedArray
) => void

type ColorApplier = (filter: ColorFilter, transformer: Transformer) => Transformer

export { Transformer, ColorFilter, ColorApplier }
