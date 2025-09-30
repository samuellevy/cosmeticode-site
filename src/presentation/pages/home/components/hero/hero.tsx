import { ButtonUi } from '@/presentation/components/ui/button/button.ui'
import { Container, Content } from './hero.style'

export const Hero = () => {
    return (
        <Container>
            <img alt="" src="/hero/background.png" />

            <Content>
                <h1>Seu guia de cosmiatria baseado em evidências</h1>
                <p>Rápido, confiável, feito por especialistas</p>
                <ButtonUi $variant="primary">Experimente grátis</ButtonUi>
            </Content>
        </Container>
    )
}
