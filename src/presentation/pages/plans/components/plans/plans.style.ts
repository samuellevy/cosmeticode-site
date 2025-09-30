import styled, { css } from 'styled-components'

export const Container = styled.div`
    display: flex;
    max-width: 66.5rem;
    margin-inline: auto;
    justify-content: center;
    align-items: flex-end;
    gap: 1rem;
    margin-block: 6.44rem 9.69rem;
`

type PlanProps = {
    $mostChosen: boolean
}

export const Plan = styled.div<PlanProps>`
    flex: 1;
    max-width: 32.75rem;
    border-radius: 1.5rem;
    background: var(--Black, #000);
    position: relative;

    ${({ $mostChosen }) => $mostChosen && css`margin-block-start: 3.13rem;`}
`

export const PlanContent = styled.div`
    padding: 2rem;
    position: relative;
    overflow: hidden;
    height: 25.375rem;
    display: flex;
    flex-direction: column;

    > hr {
        margin-block: 1.56rem 1.5rem;
    }
`

export const Background = styled.img<PlanProps>`
    position: absolute;
    bottom: 1.02rem;
    right: -1.25rem;
    opacity: 0.15;

    ${({ $mostChosen }) => !$mostChosen && css`display: none;`}
`

type MostChosenProps = {
    $mostChosen: boolean
}

export const MostChosen = styled.div<MostChosenProps>`
    display: ${({ $mostChosen }) => ($mostChosen ? 'block' : 'none')};
    border-radius: 1.5rem;
    background: var(--Secondary-Dark, #226EBF);
    color: var(--Primary-Light, #EEE4DF);
    text-align: center;
    font-size: 1rem;
    font-weight: 700;
    padding-block: 1.03rem 0.91rem;
    position: absolute;
    z-index: -10;
    top: -3.13rem;
    left: 0;
    right: 0;
    height: 13.125rem;
`

export const Name = styled.h2`
    /* Visual */
    color: ${({ theme }) => theme.colors['primary-light']};
    /* Tipografia */
    font-size: ${({ theme }) => theme['font-size'][60]};
    font-style: normal;
    font-weight: 700;
    line-height: ${({ theme }) => theme['line-height'].compact};
    letter-spacing: -0.06rem;
`

export const Benefits = styled.ul`
    /* Layout */
    display: flex;
    flex-direction: column;
    gap: 1.19rem;

    > li {
        /* Layout */
        display: flex;
        align-items: center;
        gap: 1.25rem;
        /* Visual */
        color: ${({ theme }) => theme.colors['primary-light']};
        /* Tipografia */
        font-size: ${({ theme }) => theme['font-size'][50]};
        font-style: normal;
        font-weight: 500;
        line-height: ${({ theme }) => theme['line-height'].compact};
        letter-spacing: -0.05rem;
    }
`

export const Price = styled.ul`
    /* Layout */
    margin-block-start: auto;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    > li {
        text-align: right;
        color: ${({ theme }) => theme.colors['primary-pure']};
        font-style: normal;
        line-height: ${({ theme }) => theme['line-height'].compact};

        &.annual {
            font-size: ${({ theme }) => theme['font-size'][40]};
            font-weight: 500;
            letter-spacing: -0.045rem;

            &::after {
                content: ' / ano'
            }
        }

        &.monthly {
            margin-block-end: 1.5rem;
            font-size: ${({ theme }) => theme['font-size'][70]};
            font-weight: 700;
            letter-spacing: -0.08rem;

            &::after {
                font-size: ${({ theme }) => theme['font-size'][50]};
                letter-spacing: -0.05rem;
                content: ' / mês'
            }
        }
    }
`
