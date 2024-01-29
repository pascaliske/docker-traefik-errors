import { importProvidersFrom, ApplicationConfig, ValueProvider, APP_ID } from '@angular/core'
import { provideClientHydration } from '@angular/platform-browser'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { provideRouter } from '@angular/router'
import { NgProgressModule } from 'ngx-progressbar'
import { NgProgressHttpModule } from 'ngx-progressbar/http'
import { NgProgressRouterModule } from 'ngx-progressbar/router'
import { features, routes } from './app.routing'

export const provideAppId: () => ValueProvider = (): ValueProvider => ({
    provide: APP_ID,
    useValue: 'traefik-errors',
})

export const appConfig: ApplicationConfig = {
    providers: [
        importProvidersFrom(
            NgProgressModule.withConfig({ color: '#ff6666', fixed: true }),
            NgProgressHttpModule,
            NgProgressRouterModule,
        ),
        provideClientHydration(),
        provideAnimationsAsync(),
        provideRouter(routes, ...features),
        provideAppId(),
    ],
}
