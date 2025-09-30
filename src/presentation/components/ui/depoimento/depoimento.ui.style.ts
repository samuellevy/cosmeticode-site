import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    width: 100%;
    max-width: 26rem;
    padding: 2rem 2rem 1.25rem 2rem;
    flex-direction: column;
    gap: 2rem;
    border-radius: 1rem;

    background-color: ${({ theme }) => theme.colors.black};
`

export const Header = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
`

export const Avatar = styled.img`
    width: 6rem;
    height: 6rem;
    aspect-ratio: 1/1;
    border-radius: 6rem;
`

export const Title = styled.h3`
    font-weight: 700;
    letter-spacing: -0.045rem;
    margin-block: 1rem 0.38rem;

    color: ${({ theme }) => theme.colors['secondary-medium']};
    font-size: ${({ theme }) => theme['font-size'][40]};
    line-height: ${({ theme }) => theme['line-height'].compact};
`

export const Position = styled.span`
    font-style: italic;
    letter-spacing: -0.04rem;
    display: block;

    color: ${({ theme }) => theme.colors['neutral-30']};
    font-size: ${({ theme }) => theme['font-size'][30]};
    line-height: ${({ theme }) => theme['line-height'].compact};
`

export const Body = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    > img {
        padding: 1.25rem 0.82rem;
        margin-inline: auto;
        display: block;
    }
`

export const Description = styled.p`
    letter-spacing: -0.05rem;
    flex: 1;

    color: ${({ theme }) => theme.colors['neutral-20']};
    font-size: ${({ theme }) => theme['font-size'][50]};
    line-height: ${({ theme }) => theme['line-height'].spaced};
`
