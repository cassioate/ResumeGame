import styled from 'styled-components'

interface PropsPlatformsImg {
  // bottom: number
  // left: number
  // direction: string
}

export const PlatformStyled = styled.img.attrs<PropsPlatformsImg>((props) => ({
  // style: {
  //   bottom: props.bottom+'%',
  //   left: props.left+'%',
  //   transform: `scaleX(${props.direction === 'RIGHT' ? 1 : -1})`
  // }
}))<PropsPlatformsImg>`
  position: absolute;
`

