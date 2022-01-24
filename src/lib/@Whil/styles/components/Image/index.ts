import { css } from '@emotion/react'
import styled from '@emotion/styled'
import ImageProps from '@Whil/types/components/Image'
import Image from 'next/image'

const ImageWrapper = styled(Image)<ImageProps>`
  border-radius: 10px;
  object-fit: cover
    ${({ style }) =>
      style
        ? css`
            margin: ${style.margin || '10px'};
            background: ${style.background || '#ffffff'};
            object-fit: ${style.objectfit || 'cover'};
            border-radius: ${style.borderRadius || '5px'};
          `
        : ''};
`
export default ImageWrapper
