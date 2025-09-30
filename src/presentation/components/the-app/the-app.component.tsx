import type { FC } from 'react'
import mockup from '@/presentation/assets/conteudo-criado/mockup.png'
import { ButtonUi } from '../ui/button/button.ui'
import { Actions, Container, Content, Mockup } from './the-app.component.style'

type TheAppProps = {
    $marginBottom?: number
}

export const TheApp: FC<TheAppProps> = ({ $marginBottom = 6.25 }) => {
    return (
        <Container $marginBottom={$marginBottom}>
            <img alt="" src="/icons/cosmeticode.svg" />
            <img alt="" src="/icons/cosmeticode.svg" />

            <Mockup $backgroundImage={mockup} />

            <Content>
                <h2>
                    Conteúdo criado, atualizado e verificado por profissionais
                    especializados
                </h2>
                <p>Pensado para encaixar na sua rotina</p>

                <Actions>
                    <ButtonUi $variant="primary">Experimente grátis</ButtonUi>
                    <ButtonUi $variant="neutral">Baixe o app</ButtonUi>
                </Actions>
            </Content>
        </Container>
    )
}
