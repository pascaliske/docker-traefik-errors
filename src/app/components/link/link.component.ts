import { Component, input } from '@angular/core'
import { NgIf } from '@angular/common'

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'a',
    templateUrl: './link.component.html',
    styleUrls: ['./link.component.scss'],
    imports: [NgIf],
})
export class LinkComponent {
    public readonly label = input<string>()

    public readonly icon = input<string>()
}
