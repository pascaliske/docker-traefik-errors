import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
    standalone: true,
    selector: 'cmp-illustration',
    templateUrl: './illustration.component.html',
    styleUrls: ['./illustration.component.scss'],
    imports: [CommonModule],
})
export class IllustrationComponent {
    @Input()
    public title: string | undefined
}
