import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { HeaderComponent } from 'components/header/header.component'
import { LinkComponent } from 'components/link/link.component'
import { CodeComponent } from 'components/code/code.component'
import { MessageComponent } from 'components/message/message.component'
import { IllustrationComponent } from 'components/illustration/illustration.component'
import { ErrorComponent } from './error.component'
import { ValidCodeGuard } from './valid-code.guard'

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: ErrorComponent,
        canActivate: [ValidCodeGuard()],
    },
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        HeaderComponent,
        LinkComponent,
        CodeComponent,
        MessageComponent,
        IllustrationComponent,
    ],
    declarations: [ErrorComponent],
    exports: [ErrorComponent],
})
export class ErrorModule {}
