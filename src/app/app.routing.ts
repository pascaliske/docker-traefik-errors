import type { RouterFeatures, Routes } from '@angular/router'
import { withDisabledInitialNavigation, withInMemoryScrolling } from '@angular/router'
import { ValidCodeGuard } from 'pages/error/valid-code.guard'

export const features: RouterFeatures[] = [
    withDisabledInitialNavigation(),
    withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
    }),
]

export const routes: Routes = [
    {
        path: '**',
        canActivate: [ValidCodeGuard()],
        loadComponent: () => import('pages/error/error.component').then(m => m.ErrorComponent),
    },
]
