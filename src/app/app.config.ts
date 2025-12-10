import type { ApplicationConfig, ValueProvider } from '@angular/core'
import { provideZonelessChangeDetection, APP_ID } from '@angular/core'
import { provideRouter } from '@angular/router'
import { provideNgProgressOptions } from 'ngx-progressbar'
import { provideNgProgressRouter } from 'ngx-progressbar/router'
import { features, routes } from './app.routing'

export const provideAppId: () => ValueProvider = (): ValueProvider => ({
    provide: APP_ID,
    useValue: 'traefik-errors',
})

export const appConfig: ApplicationConfig = {
    providers: [
        provideZonelessChangeDetection(),
        provideRouter(routes, ...features),
        provideNgProgressOptions({ spinner: true }),
        provideNgProgressRouter({}),
        provideAppId(),
    ],
}
