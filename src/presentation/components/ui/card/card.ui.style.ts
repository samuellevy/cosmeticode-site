import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    max-width: 23.75rem;
    height: 100%;
    max-height: 22.6875rem;
    border-radius: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.10);
    background: linear-gradient(121deg, #2D2D2D 0%, #1C1C1C 100%);
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 9rem;
`

export const Title = styled.h3`
    font-weight: 700;
    letter-spacing: -0.08rem;

    color: ${({ theme }) => theme.colors['primary-light']};
    font-size: ${({ theme }) => theme['font-size'][70]};
    line-height: ${({ theme }) => theme['line-height'].compact};
`

export const Description = styled.p`
    font-weight: 500;
    letter-spacing: -0.05rem;

    color: ${({ theme }) => theme.colors['primary-light']};
    font-size: ${({ theme }) => theme['font-size'][50]};
    line-height: ${({ theme }) => theme['line-height'].spaced};
`
