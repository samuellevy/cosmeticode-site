import { DepoimentoUi } from '@/presentation/components/ui/depoimento/depoimento.ui'
import { SectionHeader } from '../section-header/section-header'
import { Container, Content } from './depoimentos.style'

const depoimentos = [
    {
        avatar_url: '/depoimento/lais-penedo.png',
        name: 'Dra Laís Penedo',
        position: 'Dermatologista',
        content:
            'Cosmeticode é realmente revolucionário. É excelente ter, em um só lugar, informações extremamente confiáveis sobre todo o universo da cosmiatria, seja para uma consulta rápida que ajuda no dia a dia ou mesmo para estudar sobre conteúdos mais aprofundados! Mudou a minha rotina e eu amei!',
    },
    {
        avatar_url: '/depoimento/lucas-andrade.png',
        name: 'Lucas Andrade',
        position: 'Estudante de Biomedicina Estética',
        content:
            'Sou estudante de biomedicina estética e a Cosmeticode tem sido meu aliado nos estudos. A forma como o conteúdo é organizado facilita muito a revisão antes das provas e até durante os atendimentos práticos.',
    },
    {
        avatar_url: '/depoimento/fernanda-alves.png',
        name: 'Dra. Fernanda Alves',
        position: 'Dermatologista',
        content:
            'A Cosmeticode tem me ajudado muito na prática clínica. Como dermatologista, preciso de informações rápidas e seguras, e o app entrega exatamente isso.',
    },
]

export const Depoimentos = () => {
    return (
        <Container>
            <SectionHeader caption="A voz de quem usa" title="Depoimentos" />

            <Content>
                {depoimentos.map((depoimento, index) => (
                    <DepoimentoUi
                        avatar_url={depoimento.avatar_url}
                        content={depoimento.content}
                        key={`${index}-${depoimento.name}`}
                        name={depoimento.name}
                        position={depoimento.position}
                    />
                ))}
            </Content>
        </Container>
    )
}
