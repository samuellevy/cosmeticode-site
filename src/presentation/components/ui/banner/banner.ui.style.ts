import styled from 'styled-components'

type ContainerProps = {
    $marginBottom: number
}

export const Container = styled.div<ContainerProps>`
    margin-inline: auto;
    max-width: 88rem;
    height: 35.5rem;
    position: relative;
    border-radius: 2rem;
    overflow: hidden;
    padding-block-end: 4.5rem;
    padding-inline: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: end;
    gap: 1.5rem;
    margin-block-end: ${({ $marginBottom }) => `${$marginBottom}rem`};

    > img {
        width: 100%;
        height: 100%;
        position: absolute;
        inset: 0;
        opacity: 80%;
        object-fit: cover;
        object-position: center;
        z-index: -10;
    }
`

export const Title = styled.h2`
    max-width: 39.5rem;
    font-weight: 700;
    letter-spacing: -0.1125rem;

    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme['font-size'][80]};
    line-height: ${({ theme }) => theme['line-height'].compact};
`

export const Actions = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 1rem;
`
