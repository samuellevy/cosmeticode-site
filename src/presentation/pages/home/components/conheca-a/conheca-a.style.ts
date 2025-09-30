import styled from 'styled-components'

export const Container = styled.div`
    margin-inline: auto;
    max-width: 80rem;
    position: relative;
    margin-block-end: 11.75rem;
`

export const Background = styled.img`
    position: absolute;
    right: -3.31rem;
    bottom: -3.04rem;
    opacity: 0.15;
    z-index: -10;
`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;

    margin-block-start: 2.5rem;
`

export const Item = styled.div`
    max-width: 19.25rem;
`

export const ItemIcon = styled.img`
    width: 12.6875rem;
    height: 12.6875rem;
`

export const ItemTitle = styled.h3`
    margin-block: 1rem 2rem;

    font-weight: 700;
    letter-spacing: -0.06rem;
    color: ${({ theme }) => theme.colors['primary-pure']};
    font-size: ${({ theme }) => theme['font-size'][60]};
    line-height: ${({ theme }) => theme['line-height'].compact};
`

export const ItemDescription = styled.p`
    font-weight: 500;
    letter-spacing: -0.05rem;
    color: ${({ theme }) => theme.colors['primary-light']};
    font-size: ${({ theme }) => theme['font-size'][50]};
    line-height: ${({ theme }) => theme['line-height'].spaced};
`
