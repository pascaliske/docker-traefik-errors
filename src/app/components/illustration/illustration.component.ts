import { Component, Input } from '@angular/core'

@Component({
    selector: 'cmp-illustration',
    templateUrl: './illustration.component.html',
    styleUrls: ['./illustration.component.scss'],
})
export class IllustrationComponent {
    @Input()
    public title: string | undefined
}
