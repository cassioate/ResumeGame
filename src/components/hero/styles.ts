import styled from 'styled-components'

interface PropsImgHero {
  bottom: number
  left: number
}

export const HeroStyled = styled.img<PropsImgHero>`
  position: absolute;
  bottom: ${props => props.bottom + 'px'};
  left: ${props => props.left + 'px'};
  width: ${props => props.width + 'px'};
  height: ${props => props.height + 'px'};
  src: ${props => props.src};
`