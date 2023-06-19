import { Component, ChangeDetectionStrategy, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StatusCodes } from 'http-status-codes'

@Component({
    standalone: true,
    selector: 'cmp-code',
    templateUrl: './code.component.html',
    styleUrls: ['./code.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule],
})
export class CodeComponent {
    @Input()
    public code: StatusCodes = StatusCodes.OK
}
