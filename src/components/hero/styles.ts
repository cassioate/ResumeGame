import styled from 'styled-components'

interface PropsImgHero {
  bottom: number
  left: number
  direction: string
}
export const HeroStyledBase = styled.img<PropsImgHero>`
  position: absolute;
`
export const HeroStyled = styled.img.attrs<PropsImgHero>((props) => ({
  style: {
    bottom: props.bottom,
    left: props.left,
    transform: `scaleX(${props.direction === 'RIGHT' ? 1 : -1})`
  }
}))<PropsImgHero>`
  position: absolute;
`

