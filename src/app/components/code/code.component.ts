import { Component, ChangeDetectionStrategy, Input } from '@angular/core'
import { StatusCodes } from 'http-status-codes'

@Component({
    selector: 'cmp-code',
    templateUrl: './code.component.html',
    styleUrls: ['./code.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeComponent {
    @Input()
    public code: StatusCodes = StatusCodes.OK
}
