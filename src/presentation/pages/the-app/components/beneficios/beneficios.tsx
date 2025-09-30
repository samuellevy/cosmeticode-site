import { BeneficioUi } from '@/presentation/components/ui/beneficio/beneficio.ui'
import { CarouselUi } from '@/presentation/components/ui/carousel/carousel.ui'
import { Container } from './beneficios.style'

const data = [
    {
        title: 'Busca de produtos específicos <br /> através de filtros',
        description:
            'Encontre rapidamente por marca, <br /> categoria e indicação clínica.',
    },
    {
        title: 'Skincare para <br /> gestantes',
        description:
            'Orientações seguras sobre ativos e formulações <br /> permitidos alinhadas às recomendações vigentes.',
    },
    {
        title: 'Doses adequadas <br /> para cada tratamento',
        description:
            'Guia de doses usuais por área, com parâmetros <br /> práticos para ajustar à necessidade do paciente.',
    },
    {
        title: 'Conduta diante de <br /> complicações',
        description:
            'Orientações de manejo para eventos adversos <br /> frequentes ou graves, com foco em segurança.',
    },
    {
        title: 'Orientações pré e <br /> pós-procedimento',
        description:
            'Preparo, cuidados domiciliares e sinais de alerta para <br /> maior segurança nos procedimentos do consultório.',
    },
]

export const Beneficios = () => {
    const slides = [
        () => (
            <BeneficioUi
                description={data[0].description}
                title={data[0].title}
            />
        ),
        () => (
            <BeneficioUi
                description={data[1].description}
                title={data[1].title}
            />
        ),
        () => (
            <BeneficioUi
                description={data[2].description}
                title={data[2].title}
            />
        ),
        () => (
            <BeneficioUi
                description={data[3].description}
                title={data[3].title}
            />
        ),
        () => (
            <BeneficioUi
                description={data[4].description}
                title={data[4].title}
            />
        ),
    ]

    return (
        <Container>
            <CarouselUi $perView={1} slides={slides} />
        </Container>
    )
}
