// transformers ========================================================================================================
type BindedTransformer = (
	context: CanvasRenderingContext2D,
	width: number,
	height: number,
	pixels: Uint8ClampedArray
) => void

type Transformer<T = { [key: string]: any }> = (
	args?: Partial<T>
) => BindedTransformer

// colors ==============================================================================================================
type BindedColorFilter = (rgba: Uint8ClampedArray) => Uint8ClampedArray

type ColorFilter<T = { [key: string]: any }> = (
	args?: Partial<T>
) => BindedColorFilter

type ColorApplier = (
	filter: BindedColorFilter,
	transformer: BindedTransformer
) => BindedTransformer

export {
	Transformer,
	BindedColorFilter,
	ColorApplier,
	BindedTransformer,
	ColorFilter,
}

export type Rectangle = {
	x: number
	y: number
	width: number
	height: number
}
