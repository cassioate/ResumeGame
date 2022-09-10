import styled from 'styled-components'

interface PropsHitBox {
  bottom: number;
  left: number;
  width: number;
  height: number;
}

export const HitBoxPlatform = styled.div.attrs<PropsHitBox>((props) => ({
  style: {
    width: props.width,
    height: props.height,
    bottom: props.bottom+'px',
    left: props.left+'px',
  }
}))<PropsHitBox>`
  /* border-bottom-left-radius: 50px; */
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`

interface IMG {
  rotate?: number
  zIndex?: number;
  bottom?: number
}

export const PlatformImgStyled = styled.img<IMG>`
  top: -10px;
  src: ${props => props.src};
  position: absolute;
  transform: ${props => props.rotate && 'rotate('+props.rotate+'deg)'};
  z-index: ${props => props.zIndex};
`