import { Component, inject } from '@angular/core'
import { AsyncPipe } from '@angular/common'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { LinkComponent } from 'components/link/link.component'

@Component({
    selector: 'cmp-header',
    templateUrl: './header.component.html',
    imports: [AsyncPipe, LinkComponent],
})
export class HeaderComponent {
    private readonly route: ActivatedRoute = inject(ActivatedRoute)

    public home$: Observable<string | null> = this.route.queryParamMap.pipe(
        takeUntilDestroyed(),
        map(params => params.get('home')),
    )
}
