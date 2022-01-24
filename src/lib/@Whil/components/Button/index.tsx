import { FC } from 'react'
import * as S from '@Whil/styles/components/Button'
import ButtonProps from '@Whil/types/components/Button'

const Button: FC<ButtonProps> = ({ props, children }) => {
  return (
    <S.Button
      type={props.type === 'submit' ? props.type : 'button'}
      {...{ props }}
    >
      {children}
    </S.Button>
  )
}

export default Button
