export interface FaqItemInterface {
    data: { title: string; text: string }
    isActive: boolean
    handleClick: () => void
}
