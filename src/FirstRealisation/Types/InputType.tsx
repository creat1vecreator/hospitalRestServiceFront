export type InputProps = {
    name?: string
    placeholder: string,
    validation ?: (str: string) => string,
    initValue?: string,

}
export type InputRangeProps = {
    name: string,
    min?: number,
    max?: number

}
