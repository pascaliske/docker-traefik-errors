import { Component, DOCUMENT, inject } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { AsyncPipe } from '@angular/common'
import { RouterModule, ActivatedRoute, ParamMap } from '@angular/router'
import { Observable, combineLatest, of } from 'rxjs'
import { map, filter, take, delay } from 'rxjs/operators'
import { StatusCodes } from 'http-status-codes'
import { HeaderComponent } from 'components/header/header.component'
import { CodeComponent } from 'components/code/code.component'
import { MessageComponent } from 'components/message/message.component'
import { IllustrationComponent } from 'components/illustration/illustration.component'

@Component({
    selector: 'cmp-error',
    templateUrl: './error.component.html',
    imports: [
        AsyncPipe,
        RouterModule,
        HeaderComponent,
        CodeComponent,
        MessageComponent,
        IllustrationComponent,
    ],
})
export default class ErrorComponent {
    private readonly document: Document = inject<Document>(DOCUMENT)

    private readonly route: ActivatedRoute = inject(ActivatedRoute)

    public code$: Observable<StatusCodes> = this.route.queryParamMap.pipe(
        takeUntilDestroyed(),
        map<ParamMap, StatusCodes>(params => parseInt(params.get('code') ?? '404', 10)),
        filter(code => !isNaN(code)),
        take(1),
    )

    public retry$: Observable<string> = this.route.queryParamMap.pipe(
        takeUntilDestroyed(),
        map<ParamMap, string>(params => params.get('retry') ?? ''),
        take(1),
    )

    public message$: Observable<StatusCodes> = this.code$.pipe(delay(300))

    public illustration$: Observable<StatusCodes> = this.code$.pipe(delay(600))

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
