type ColorFilter = (rgba: Uint8ClampedArray) => Uint8ClampedArray

type BindedTransformer = (
	context: CanvasRenderingContext2D,
	width: number,
	height: number,
	pixels: Uint8ClampedArray
) => void

type Transformer<T = { [key: string]: any }> = (
	args?: Partial<T>
) => BindedTransformer

type ColorApplier = (
	filter: ColorFilter,
	transformer: BindedTransformer
) => BindedTransformer

export { Transformer, ColorFilter, ColorApplier, BindedTransformer }
