import styled from 'styled-components'

interface PropsPlatformsImg {
  bottom: number
  left: number
}

export const Platform1Styled = styled.img.attrs<PropsPlatformsImg>((props) => ({
  style: {
    bottom: props.bottom+'%',
    left: props.left+'%',
  }
}))<PropsPlatformsImg>`
  position: absolute;
`