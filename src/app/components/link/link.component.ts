import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
    standalone: true,
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'a',
    templateUrl: './link.component.html',
    styleUrls: ['./link.component.scss'],
    imports: [CommonModule],
})
export class LinkComponent {
    @Input()
    public label: string | undefined

    @Input()
    public icon: string | undefined
}
