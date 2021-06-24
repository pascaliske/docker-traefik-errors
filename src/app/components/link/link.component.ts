import { Component, Input } from '@angular/core'

@Component({
    selector: 'a',
    templateUrl: './link.component.html',
    styleUrls: ['./link.component.scss'],
})
export class LinkComponent {
    @Input()
    public label: string | undefined

    @Input()
    public icon: string | undefined
}
