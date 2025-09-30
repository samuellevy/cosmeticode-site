import styled from 'styled-components'

export const Container = styled.div`
  position: sticky;
  width: 100%;
  z-index: 100;
  top: 2rem;
`

export const Content = styled.div`
    /* Box Model */
    width: 100%;
    max-width: 84rem;
    margin-inline: auto;
    padding: 0.75rem;
    /* Layout */
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* Visual */
    border-radius: 3.5rem;
    border: 1px solid rgba(255, 255, 255, 0.05);
    background-color: rgba(90, 90, 90, 0.30);
    box-shadow: 0 4px 28px 0 rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(22px);
`

export const Menu = styled.menu`
    flex: 1;
    display: flex;
    align-items: center;

    > a {
        display: flex;
        padding: 1rem 1.5rem;
        border-radius: 1.5rem;
        font-weight: 500;
        letter-spacing: -0.04rem;
        text-decoration: none;

        color: ${({ theme }) => theme.colors['primary-light']};
        font-size: ${({ theme }) => theme['font-size'][30]};
        line-height: ${({ theme }) => theme['line-height'].compact};

        &.active {
            font-weight: 700;

            color: ${({ theme }) => theme.colors['primary-pure']};
        }
    }
`

export const Actions = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    > a {
        display: flex;
        padding: 1rem 1.5rem;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        border-radius: 1.5rem;
        letter-spacing: -0.04rem;
        text-decoration: none;

        color: ${({ theme }) => theme.colors['primary-light']};
        font-size: ${({ theme }) => theme['font-size'][30]};
        line-height: ${({ theme }) => theme['line-height'].compact};
    }
`
