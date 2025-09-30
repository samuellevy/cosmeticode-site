import { CarouselUi } from '@/presentation/components/ui/carousel/carousel.ui'
import { TextItemUi } from '@/presentation/components/ui/text-item/text-item.ui'
import { SectionHeader } from '../section-header/section-header'
import {
    Background,
    Container,
    Content,
} from './beneficios-para-o-profissional.style'

const beneficios = [
    {
        title: 'Economia de tempo',
        description:
            'Respostas objetivas em poucos cliques durante o atendimento.',
        banner_url: '/beneficios-para-o-profissional/economia-de-tempo.jpg',
    },
    {
        title: 'Decisão mais segura',
        description:
            'Protocolos de injeção, diluições, indicações e contraindicações de procedimentos. ',
        banner_url: '/beneficios-para-o-profissional/decisao-mais-segura.png',
    },
    {
        title: 'Manejo de intercorrências',
        description:
            'Condutas rápidas em eventos adversos para o melhor cuidado com os pacientes. ',
        banner_url:
            '/beneficios-para-o-profissional/manejo-de-intercorrencias.png',
    },
    {
        title: 'Favoritos e anotações pessoais',
        description:
            'Faça anotações e salve os conteúdos favoritos para facilitar a busca. ',
        banner_url:
            '/beneficios-para-o-profissional/favoritos-e-anotacoes-pessoais.png',
    },
    {
        title: 'Acesso multiplataforma',
        description:
            'Acesse o aplicativo pelo celular, iPad e pelo computador, no consultório ou em movimento.',
        banner_url:
            '/beneficios-para-o-profissional/acesso-multiplataforma.png',
    },
]

export const BeneficiosParaOProfissional = () => {
    const slides = [
        () => (
            <TextItemUi
                banner_url={beneficios[0].banner_url}
                description={beneficios[0].description}
                title={beneficios[0].title}
            />
        ),
        () => (
            <TextItemUi
                banner_url={beneficios[1].banner_url}
                description={beneficios[1].description}
                title={beneficios[1].title}
            />
        ),
        () => (
            <TextItemUi
                banner_url={beneficios[2].banner_url}
                description={beneficios[2].description}
                title={beneficios[2].title}
            />
        ),
        () => (
            <TextItemUi
                banner_url={beneficios[3].banner_url}
                description={beneficios[3].description}
                title={beneficios[3].title}
            />
        ),
        () => (
            <TextItemUi
                banner_url={beneficios[4].banner_url}
                description={beneficios[4].description}
                title={beneficios[4].title}
            />
        ),
    ]

    return (
        <Container>
            <Background
                alt=""
                src="/beneficios-para-o-profissional/background.png"
            />

            <SectionHeader
                caption="Seu melhor guia em cosmiatria"
                title="Benefícios para o profissional"
            />

            <Content>
                <CarouselUi $variant="secondary" slides={slides} />
            </Content>
        </Container>
    )
}
