import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LinkModule } from 'components/link/link.module'
import { MessageComponent } from './message.component'

@NgModule({
    imports: [CommonModule, LinkModule],
    declarations: [MessageComponent],
    exports: [MessageComponent],
})
export class MessageModule {}
