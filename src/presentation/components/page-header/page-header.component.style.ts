import styled from 'styled-components'

export const Container = styled.div`
    /* Box Model */
    max-width: 88rem;
    height: 24.125rem;
    margin-inline: auto;
    /* Layout */
    display: flex;
    justify-content: center;
    /* Visual */
    position: relative;

    > img {
        position: absolute;
        inset: 0;
        z-index: -10;
    }
`

export const Title = styled.h1`
    margin-block: auto 4.62rem;
    display: flex;
    flex-direction: column;
    font-weight: 700;
    letter-spacing: -0.06rem;
    text-align: center;

    color: ${({ theme }) => theme.colors['primary-pure']};
    font-size: ${({ theme }) => theme['font-size'][60]};
    line-height: ${({ theme }) => theme['line-height'].compact};

    > span {
        letter-spacing: -0.1125rem;
        text-align: center;

        color: ${({ theme }) => theme.colors.white};
        font-size: ${({ theme }) => theme['font-size'][80]};
        line-height: ${({ theme }) => theme['line-height'].compact};
    }
`
