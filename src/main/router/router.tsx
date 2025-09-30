import { createBrowserRouter } from 'react-router'
import { RootLayout } from '@/presentation/layouts/root/root.layout'
import { HomePage } from '@/presentation/pages/home/home.page'
import { OurMissionPage } from '@/presentation/pages/our-mission/our-mission.page'
import { PlansPage } from '@/presentation/pages/plans/plans.page'
import { TheAppPage } from '@/presentation/pages/the-app/the-app.page'

export const router = createBrowserRouter([
    {
        Component: RootLayout,
        children: [
            { index: true, Component: HomePage },
            { path: '/the-app', Component: TheAppPage },
            { path: '/our-mission', Component: OurMissionPage },
            { path: '/plans', Component: PlansPage },
        ],
    },
])
