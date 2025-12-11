import { Component, input, output } from '@angular/core'

@Component({
    selector: 'cmp-link',
    templateUrl: './link.component.html',
})
export class LinkComponent {
    public readonly href = input<string>()

    public readonly label = input<string>()

    public readonly icon = input<string>()

    public readonly click = output<void>()
}
