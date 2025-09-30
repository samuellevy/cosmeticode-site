import styled from 'styled-components'

export const Container = styled.div`
    /* Layout */
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
    /* Box Model */
    max-width: 66.5rem;
    margin-inline: auto;

    > h2 {
        /* Visual */
        color: ${({ theme }) => theme.colors['primary-pure']};
        /* Tipografia */
        font-size: ${({ theme }) => theme['font-size'][80]};
        font-style: normal;
        font-weight: 700;
        line-height: ${({ theme }) => theme['line-height'].compact};
        letter-spacing: -0.1125rem;
    }
`
