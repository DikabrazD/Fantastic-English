export enum ButtonType {
    static = 'static',
    changeToWhite = 'changeToWhite',
    changeToMain = 'changeToMain',
    blink = 'blink',
    arrow = 'arrow',
    arrowOutlineInMain = 'arrowOutlineInMain'
}

export interface ButtonInterface {
    type?: string
    text?: string | number
    isDisabled?: boolean
    onClick?: () => void
}
