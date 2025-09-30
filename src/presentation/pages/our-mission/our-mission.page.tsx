import { PageHeader } from '@/presentation/components/page-header/page-header.component'
import { BannerUi } from '@/presentation/components/ui/banner/banner.ui'
import { Mission } from './components/mission/mission'

export const OurMissionPage = () => {
    return (
        <>
            <PageHeader caption="Nossa missão" title="sobre nós" />
            <Mission />
            <BannerUi $marginBottom={6} />
        </>
    )
}
