import styled from 'styled-components'

interface PropsIMG {
  bottom: number;
  left: number;
  width: number;
  height: number;
  rotate?: number;
  src: string;
  zIndex?: number;
}

export const DecorationStyled = styled.img.attrs<PropsIMG>((props) => ({
  style: {
    width: props.width,
    height: props.height,
    bottom: props.bottom+'px',
    left: props.left+'px',
    transform: props.rotate && 'rotate('+props.rotate+'deg)',
    zIndex: props.zIndex && props.zIndex,
    src: props.src
  }
}))<PropsIMG>`
  display: flex;
  position: absolute;
`