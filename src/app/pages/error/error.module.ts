import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { HeaderModule } from 'components/header/header.module'
import { LinkModule } from 'components/link/link.module'
import { CodeModule } from 'components/code/code.module'
import { MessageModule } from 'components/message/message.module'
import { IllustrationModule } from 'components/illustration/illustration.module'
import { ErrorComponent } from './error.component'
import { ValidCodeGuard } from './valid-code.guard'

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: ErrorComponent,
        canActivate: [ValidCodeGuard],
    },
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        HeaderModule,
        LinkModule,
        CodeModule,
        MessageModule,
        IllustrationModule,
    ],
    declarations: [ErrorComponent],
    exports: [ErrorComponent],
})
export class ErrorModule {}
