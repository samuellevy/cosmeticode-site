import { SocialButton } from '@/presentation/components/social-button/social-button.component'
import { CardUi } from '@/presentation/components/ui/card/card.ui'
import { CarouselUi } from '@/presentation/components/ui/carousel/carousel.ui'
import { SectionHeader } from '../section-header/section-header'
import { Container, Content, Mockup } from './como-funciona.style'

const data = [
    {
        title: 'Skincare',
        description:
            'Descubra os ativos de cada produto e entenda suas funções para prescrever e formular com mais segurança.',
    },
    {
        title: 'Injetáveis',
        description:
            'Explore composição, diluições e indicações dos injetáveis; aprimore suas técnicas de injeção.',
    },
    {
        title: 'Guia Anatômico',
        description:
            'Revise detalhes práticos de anatomia para maior domínio e segurança nas técnicas de injeção. ',
    },
    {
        title: 'Protocolos e Orientações',
        description:
            'Avaliações, cuidados e recomendações pré e pós-procedimento para tratamentos seguros em cosmiatria.',
    },
    {
        title: 'Complicações e Manejo',
        description:
            'Fluxos práticos para identificação, intervenção e acompanhamento de complicações em cosmiatria.',
    },
]

export const ComoFunciona = () => {
    const slides = [
        () => (
            <CardUi description={data[0].description} title={data[0].title} />
        ),
        () => (
            <CardUi description={data[1].description} title={data[1].title} />
        ),
        () => (
            <CardUi description={data[2].description} title={data[2].title} />
        ),
        () => (
            <CardUi description={data[3].description} title={data[3].title} />
        ),
        () => (
            <CardUi description={data[4].description} title={data[4].title} />
        ),
    ]

    return (
        <Container>
            <SectionHeader caption="O nosso app" title="como funciona">
                <SocialButton />
            </SectionHeader>

            <Content>
                <Mockup alt="" src="/como-funciona/background.png" />

                <CarouselUi
                    $actionsMarginTop={9.44}
                    $spacing={32.5}
                    options={{ align: 'start' }}
                    slides={slides}
                />
            </Content>
        </Container>
    )
}
