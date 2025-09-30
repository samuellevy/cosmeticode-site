import { ButtonUi } from '@/presentation/components/ui/button/button.ui'
import Faq from '@/presentation/components/ui/faq/faq.ui'
import {
    Container,
    Content,
    FaqContent,
    Header,
    HeaderContent,
    Title,
} from './faq.style'

export const FAQ = () => {
    return (
        <Container>
            <Content>
                <Header>
                    <HeaderContent>
                        <Title>
                            Perguntas frequentes <span>Precisa de ajuda?</span>
                        </Title>

                        <ButtonUi>Fale com o suporte</ButtonUi>
                    </HeaderContent>

                    <hr />
                </Header>

                <FaqContent>
                    <Faq
                        answer="Aenean et arcu at nisi pharetra mattis. Sed ex tellus, molestie at pulvinar nec, hendrerit eget ipsum. Nam tincidunt vulputate neque, et pulvinar nunc varius sit amet. Ut eu ultrices mauris. Donec sed ante congue, dapibus sapien et, dapibus odio. Integer eget faucibus enim, finibus fringilla enim. Suspendisse et nulla nulla. Vivamus quis elementum metus, ut posuere orci. Integer diam nibh, dignissim id dolor eget, luctus mollis metus. Ut a blandit lacus, ac vehicula urna."
                        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
                    />

                    <ButtonUi $variant="neutral">Visualizar mais</ButtonUi>
                </FaqContent>
            </Content>
        </Container>
    )
}
