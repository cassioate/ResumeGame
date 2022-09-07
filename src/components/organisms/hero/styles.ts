import styled from 'styled-components'

export const HeroStyled = styled.img`
  src: ${props => props.src};
  position: absolute;
`

interface PropsHero {
  bottom: number
  left: number
  direction: string
  width: number
  height: number
}

export const HeroHitBox = styled.div.attrs<PropsHero>((props) => ({
  style: {
    width: props.width,
    height: props.height,
    bottom: props.bottom+'px',
    left: props.left+'px',
    transform: `scaleX(${props.direction === 'RIGHT' ? 1 : -1})`
  }
}))<PropsHero>`

  position: absolute;
  /* border-style: solid; */
  display: flex;
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;
  z-index: 5;
`

