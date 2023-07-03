export type Checkbox = 'underline' | 'changeColor'
export type CheckboxColor = 'white' | 'black'

export interface CheckboxInterface {
    text: string
    link?: string
    type?: Checkbox
    color?: CheckboxColor
    onChecked?: (v: boolean) => void
}
