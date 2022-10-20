export enum ButtonType {
    static = 'static',
    blink = 'blink',
    arrow = 'arrow'
}

export interface ButtonInterface {
    type?: string
    text?: string | number
}
