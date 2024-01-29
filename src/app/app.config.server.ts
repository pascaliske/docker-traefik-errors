import { ApplicationConfig, mergeApplicationConfig } from '@angular/core'
import { provideServerRendering } from '@angular/platform-server'
import { appConfig } from './app.config'

export const serverConfig: ApplicationConfig = mergeApplicationConfig(appConfig, {
    providers: [provideServerRendering()],
})
