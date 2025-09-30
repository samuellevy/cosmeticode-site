import styled, { css } from 'styled-components'

type ContainerProps = {
    $variant: 'default' | 'primary' | 'secondary' | 'neutral'
}

const variantStyles = {
    default: css`
        background-color: ${({ theme }) => theme.colors.white};

        &:hover {
            background-color: ${({ theme }) => theme.colors['neutral-20']};
        }
    `,
    primary: css`
        background-color: ${({ theme }) => theme.colors['primary-pure']};

        &:hover {
            background-color: ${({ theme }) => theme.colors['primary-medium']};
        }
    `,
    secondary: css`
        background-color: ${({ theme }) => theme.colors['secondary-medium']};

        &:hover {
            background-color: ${({ theme }) => theme.colors['secondary-dark']};
        }
    `,
    neutral: css`
        background-color: rgba(88, 88, 88, 0.50);
        backdrop-filter: blur(14px);
        color: ${({ theme }) => theme.colors.white};

        &:hover {
            background: rgba(155, 155, 155, 0.50);
        }
    `,
}

export const Container = styled.button<ContainerProps>`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;

    padding: 1rem 1.5rem;
    border-radius: 2.5rem;

    font-weight: 700;
    letter-spacing: -0.04rem;
    color: ${({ theme }) => theme.colors['neutral-60']};
    font-size: ${({ theme }) => theme['font-size'][30]};
    line-height: ${({ theme }) => theme['line-height'].compact};

    ${({ $variant }) => variantStyles[$variant]}

    > img {
        width: 1.25rem;
        height: 1.25rem;
    }
`
