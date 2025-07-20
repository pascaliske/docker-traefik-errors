import { Component, input } from '@angular/core'

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'a',
    templateUrl: './link.component.html',
    styleUrls: ['./link.component.scss'],
})
export class LinkComponent {
    public readonly label = input<string>()

    public readonly icon = input<string>()
}
