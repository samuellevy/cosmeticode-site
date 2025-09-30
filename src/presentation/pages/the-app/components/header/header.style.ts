import styled from 'styled-components'

export const Container = styled.div`
    margin-block-end: 3.62rem;
    max-width: 79.9375rem;
    margin-inline: auto;
`

export const Content = styled.div`
    margin-block: 6.81rem 7.69rem;
    max-width: 67.5rem;
    margin-inline: auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    > p {
        color: ${({ theme }) => theme.colors['primary-light']};

        font-size: ${({ theme }) => theme['font-size'][70]};
        font-style: normal;
        font-weight: 700;
        line-height: ${({ theme }) => theme['line-height'].compact};
        letter-spacing: -0.08rem;

        &:nth-child(1) {
            max-width: 19.25rem;
        }

        &:nth-child(3) {
            max-width: 21.25rem;
        }
    }
`
