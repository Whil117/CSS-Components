import Styles from '@Whil/types/styles'

type ButtonType = 'default' | 'submit' | 'add' | 'danger' | 'warning'

interface ButtonProps {
  props: {
    type: ButtonType
    style?: Styles
  }
}

export default ButtonProps
