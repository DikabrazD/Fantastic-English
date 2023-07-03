export interface ComboboxItemInterface {
    id: number
    name: string
}

export interface ComboboxInterface {
    list: ComboboxItemInterface[]
    value: ComboboxItemInterface
    onChange: (x: ComboboxItemInterface) => void
}
