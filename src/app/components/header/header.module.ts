import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LinkModule } from 'components/link/link.module'
import { HeaderComponent } from './header.component'

@NgModule({
    imports: [CommonModule, LinkModule],
    declarations: [HeaderComponent],
    exports: [HeaderComponent],
})
export class HeaderModule {}
