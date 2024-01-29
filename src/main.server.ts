import { ApplicationRef } from '@angular/core'
import { bootstrapApplication } from '@angular/platform-browser'
import { AppComponent } from './app/app.component'
import { serverConfig } from './app/app.config.server'

export const bootstrap: () => Promise<ApplicationRef> = () => {
    return bootstrapApplication(AppComponent, serverConfig)
}

export default bootstrap
