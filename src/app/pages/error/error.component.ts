import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { Observable } from 'rxjs'
import { pluck, map, delay } from 'rxjs/operators'
import { StatusCodes } from 'http-status-codes'
import { animations } from './error.animations'

@UntilDestroy()
@Component({
    selector: 'cmp-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.scss'],
    animations,
})
export class ErrorComponent {
    public code$: Observable<StatusCodes> = this.route.params.pipe(
        untilDestroyed(this),
        pluck('code'),
        map<string, StatusCodes>(code => parseInt(code, 10)),
    )

    public message$: Observable<StatusCodes> = this.code$.pipe(delay(300))

    public illustration$: Observable<StatusCodes> = this.code$.pipe(delay(600))

    public constructor(private route: ActivatedRoute) {}
}
