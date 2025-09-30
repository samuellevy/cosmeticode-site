import styled from 'styled-components'

export const Container = styled.div`
    margin-inline: auto;

    max-width: 90rem;
    padding-block: 3.12rem 2.62rem;
    overflow: hidden;
`

export const Content = styled.div`
    margin-inline: auto;

    max-width: 80rem;

    position: relative;

    > img {
        position: absolute;
        left: -6.5rem;
        bottom: -3.67rem;

        width: 15.25rem;
        height: 14.7945rem;

        opacity: 0.15;
    }

    > hr {
        margin-block: 3.06rem 2.5rem;
    }

    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

export const Social = styled.div`
    display: flex;
    align-items: center;
    gap: 4.81rem;

    > p {
        display: flex;
        flex-direction: column;
        gap: 0.56rem;

        color: ${({ theme }) => theme.colors['primary-pure']};
        font-size: ${({ theme }) => theme['font-size'][40]};
        font-style: normal;
        font-weight: 700;
        line-height: ${({ theme }) => theme['line-height'].compact};
        letter-spacing: -0.045rem;

        > span {
            color: ${({ theme }) => theme.colors['primary-light']};
            font-size: ${({ theme }) => theme['font-size'][40]};
            font-style: normal;
            font-weight: 500;
            line-height: ${({ theme }) => theme['line-height'].compact};
            letter-spacing: -0.045rem;
        }
    }
`

export const Policies = styled.div`
    display: flex;
    align-items: center;
    gap: 2.5rem;

    > a {
        color: ${({ theme }) => theme.colors['secondary-medium']};
        font-size: ${({ theme }) => theme['font-size'][40]};
        font-style: normal;
        font-weight: 500;
        line-height: ${({ theme }) => theme['line-height'].compact};
        letter-spacing: -0.045rem;
        text-decoration-line: underline;
        text-decoration-style: solid;
        text-decoration-skip-ink: none;
        text-decoration-thickness: auto;
        text-underline-offset: auto;
        text-underline-position: from-font;
    }
`
