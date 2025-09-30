import styled from 'styled-components'

export const FaqContainer = styled.button<{ open: boolean }>`
  background: ${({ open, theme }) => (open ? theme.colors['neutral-60'] : 'rgba(25,25,25,0.6)')};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: flex-end;
  padding: 2rem 2.5rem 2rem 1.5rem;
  border-radius: 1rem;
  width: 100%;
  border: none;
  cursor: pointer;
`

export const FaqTitleRow = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  width: 100%;
`

export const FaqIcon = styled.img<{ open: boolean }>`
  width: 1.25rem;
  height: 1.25rem;
  transform: rotate(${({ open }) => (open ? '180deg' : '0deg')});
  transition: transform 0.2s;
`

export const FaqTitle = styled.p`
  color: ${({ theme }) => theme.colors['secondary-medium']};
  font-size: ${({ theme }) => theme['font-size'][50]};
  font-weight: 700;
  line-height: ${({ theme }) => theme['line-height'].compact};
  letter-spacing: -0.04rem;
  flex: 1;
  text-align: left;
`

export const FaqAnswerRow = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`

export const FaqAnswer = styled.p`
  color: ${({ theme }) => theme.colors['neutral-20']};
  font-size: ${({ theme }) => theme['font-size'][40]};
  font-weight: 500;
  line-height: ${({ theme }) => theme['line-height'].spaced};
  letter-spacing: -0.03rem;
  flex: 1;
  text-align: left;
`
