import { Component } from '@angular/core'
import { NgIf, AsyncPipe } from '@angular/common'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { LinkComponent } from 'components/link/link.component'

@Component({
    selector: 'cmp-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    imports: [NgIf, AsyncPipe, LinkComponent],
})
export class HeaderComponent {
    public home$: Observable<string | null> = this.route.queryParamMap.pipe(
        takeUntilDestroyed(),
        map(params => params.get('home')),
    )

    public constructor(private readonly route: ActivatedRoute) {}
}
