import styled from 'styled-components'

interface ThumbFlagProps {
    $iconColor?: string
}

export const Thumb = styled.div`
  max-width: 19.25rem;
  width: 100%;
  height: 16.25rem;
  border-radius: 1.5rem;

  position: relative;
  background: ${({ theme }) => theme.colors.white};
`

export const ThumbFlag = styled.div<ThumbFlagProps>`
  background-color: ${({ $iconColor }) => $iconColor};
  border-radius: 1.5rem 0 2rem 0;
  padding: 0.75rem 1rem;
  width: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    width: 3rem;
    height: 3rem;
  }
`

export const BackgroundSymbol = styled.div<ThumbFlagProps>`
  position: absolute;
  right: 1rem;
  bottom: 1rem;

  > svg {
    width: 8.25rem;
    height: 8.25rem;
    aspect-ratio: 1/1;
    opacity: 0.2;
    fill: transparent;

    path {
      fill: ${({ $iconColor }) => $iconColor};
      stroke: transparent;
    }
  }
`

export const ThumbText = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2rem;

  color: ${({ theme }) => theme.colors['neutral-60']};

  font-size: ${({ theme }) => theme['font-size'][60]};
  font-style: normal;
  font-weight: 700;
  line-height: ${({ theme }) => theme['line-height'].compact};
  letter-spacing: -0.06rem;
`
