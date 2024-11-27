import { Component, ChangeDetectionStrategy, input } from '@angular/core'
import { StatusCodes } from 'http-status-codes'

@Component({
    selector: 'cmp-code',
    templateUrl: './code.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeComponent {
    public readonly code = input<StatusCodes>(StatusCodes.OK)
}
