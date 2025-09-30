import type { FC } from 'react'
import { ButtonUi } from '../button/button.ui'
import { Actions, Container, Title } from './banner.ui.style'

type BannerUiProps = {
    $marginBottom?: number
}

export const BannerUi: FC<BannerUiProps> = ({ $marginBottom = 8.37 }) => {
    return (
        <Container $marginBottom={$marginBottom}>
            <img alt="" src="/banner/background.jpg" />

            <Title>
                Trabalhe com segurança e agilidade, sempre disponível no
                consultório
            </Title>

            <Actions>
                <ButtonUi $variant="primary">Experimente grátis</ButtonUi>
                <ButtonUi $variant="neutral">Baixe o app</ButtonUi>
            </Actions>
        </Container>
    )
}
