import { ButtonType } from '../Button/ButtonInterface'
import { Checkbox, CheckboxColor } from '../Checkbox/CheckboxInterface'

export interface FormInterface {
    checkboxColor: CheckboxColor
    privacyType: Checkbox
    buttonType?: ButtonType
}
