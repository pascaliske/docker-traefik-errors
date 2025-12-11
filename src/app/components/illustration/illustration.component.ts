import { Component, input } from '@angular/core'

@Component({
    selector: 'cmp-illustration',
    templateUrl: './illustration.component.html',
})
export class IllustrationComponent {
    public readonly title = input<string>()
}
