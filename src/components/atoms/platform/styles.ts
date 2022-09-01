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
  border-style: solid;
  display: flex;
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;
`

interface IMG {
  rotate?: number
}

export const PlatformImgStyled = styled.img<IMG>`
  src: ${props => props.src};
  position: absolute;
  transform: ${props => props.rotate ? 'rotate('+props.rotate+'deg)' : undefined};
`