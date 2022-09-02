import styled from 'styled-components'

interface PropsIMG {
  bottom: number;
  left: number;
  width: number;
  height: number;
  rotate?: number
  src: string
}

export const WallStyled = styled.img.attrs<PropsIMG>((props) => ({
  style: {
    width: props.width,
    height: props.height,
    bottom: props.bottom+'px',
    left: props.left+'px',
    transform: props.rotate && 'rotate('+props.rotate+'deg)',
    src: props.src
  }
}))<PropsIMG>`
  display: flex;
  position: absolute;
`