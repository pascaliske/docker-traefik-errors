import { Component, Inject } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { DOCUMENT } from '@angular/common'
import { ActivatedRoute, Params } from '@angular/router'
import { Observable, combineLatest, of } from 'rxjs'
import { map, filter, take, delay } from 'rxjs/operators'
import { StatusCodes } from 'http-status-codes'
import { animations } from './error.animations'

@Component({
    selector: 'cmp-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.scss'],
    animations,
})
export class ErrorComponent {
    public code$: Observable<StatusCodes> = this.route.queryParams.pipe(
        takeUntilDestroyed(),
        map<Params, StatusCodes>(params => parseInt(params?.code as string, 10)),
        filter(code => !isNaN(code)),
        take(1),
    )

    public retry$: Observable<string> = this.route.queryParams.pipe(
        takeUntilDestroyed(),
        map<Params, string>(params => params?.retry ?? ''),
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
            .pipe(takeUntilDestroyed(), take(1))
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
