import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule, Routes } from '@angular/router'
import { NgProgressModule } from 'ngx-progressbar'
import { NgProgressRouterModule } from 'ngx-progressbar/router'
import { AppComponent } from './app.component'

const routes: Routes = [
    {
        path: '**',
        loadChildren: () => import('pages/error/error.module').then(m => m.ErrorModule),
    },
]

@NgModule({
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        BrowserAnimationsModule,
        RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
        NgProgressModule.withConfig({ speed: 250, spinner: true, thick: true }),
        NgProgressRouterModule,
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}
