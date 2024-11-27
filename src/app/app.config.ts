import type { ApplicationConfig, ValueProvider } from '@angular/core'
import { provideExperimentalZonelessChangeDetection, APP_ID } from '@angular/core'
import { provideClientHydration } from '@angular/platform-browser'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
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
        provideExperimentalZonelessChangeDetection(),
        provideClientHydration(),
        provideAnimationsAsync(),
        provideRouter(routes, ...features),
        provideNgProgressOptions({ spinner: true }),
        provideNgProgressRouter({}),
        provideAppId(),
    ],
}
