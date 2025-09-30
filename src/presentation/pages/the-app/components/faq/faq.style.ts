import styled from 'styled-components'

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.black};
    padding-block: 6rem 4.62rem;
`

export const Content = styled.div`
    max-width: 66.625rem;
    margin-inline: auto;
`

export const Header = styled.div`
    > hr {
        margin-block-start: 2.5rem;
    }
`

export const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;
`

export const Title = styled.div`
    display: flex;
    flex-direction: column;

    font-weight: 700;
    letter-spacing: -0.06rem;
    color: ${({ theme }) => theme.colors['primary-light']};
    font-size: ${({ theme }) => theme['font-size'][60]};
    line-height: ${({ theme }) => theme['line-height'].compact};

    > span {
        letter-spacing: -0.1125rem;
        font-size: ${({ theme }) => theme['font-size'][80]};
        line-height: ${({ theme }) => theme['line-height'].compact};
    }
`

export const FaqContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
`
