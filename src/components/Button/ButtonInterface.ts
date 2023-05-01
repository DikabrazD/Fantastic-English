export enum ButtonType {
    static = 'static',
    changeToWhite = 'changeToWhite',
    changeToMain = 'changeToMain',
    blink = 'blink',
    arrow = 'arrow'
}

export interface ButtonInterface {
    type?: string
    text?: string | number
    isDisabled?: boolean
}
