import styled from 'styled-components'

interface PropsImgHero {
  bottom: number
  left: number
}
export const HeroStyledBase = styled.img<PropsImgHero>`
  position: absolute;
`
export const HeroStyled = styled.img.attrs<PropsImgHero>((props) => ({
  style: {
    bottom: props.bottom,
    left: props.left,
  }
}))<PropsImgHero>`
  position: absolute;
`

