import { Component, Inject } from '@angular/core'
import { DOCUMENT } from '@angular/common'
import { ActivatedRoute, Params } from '@angular/router'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { Observable, OperatorFunction, combineLatest, of } from 'rxjs'
import { pluck, map, filter, take, delay } from 'rxjs/operators'
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
    public code$: Observable<StatusCodes> = this.route.queryParams.pipe(
        untilDestroyed(this),
        pluck('code') as OperatorFunction<Params, string>,
        map<string, StatusCodes>(code => parseInt(code, 10)),
        filter(code => !isNaN(code)),
        take(1),
    )

    public retry$: Observable<string> = this.route.queryParams.pipe(
        untilDestroyed(this),
        pluck('retry') as OperatorFunction<Params, string>,
        take(1),
    )

    public message$: Observable<StatusCodes> = this.code$.pipe(delay(300))

    public illustration$: Observable<StatusCodes> = this.code$.pipe(delay(600))

    public constructor(
        @Inject(DOCUMENT) private readonly document: Document,
        private readonly route: ActivatedRoute,
    ) {}

    public retry(): void {
        combineLatest([this.retry$, of(this.document.location.href)])
            .pipe(untilDestroyed(this), take(1))
            .subscribe(([param, current]) => {
                // prepare retry url
                const retry = new URL(param ? param : current)
                retry.searchParams.delete('code')
                retry.searchParams.delete('retry')

                // retry current navigation
                this.document.location.href = retry.toString()
            })
    }
}
