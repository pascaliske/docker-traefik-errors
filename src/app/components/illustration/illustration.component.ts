import { Component, input } from '@angular/core'

@Component({
    selector: 'cmp-illustration',
    templateUrl: './illustration.component.html',
    styleUrls: ['./illustration.component.scss'],
})
export class IllustrationComponent {
    public readonly title = input<string>()
}
