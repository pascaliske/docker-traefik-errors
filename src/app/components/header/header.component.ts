import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { LinkComponent } from 'components/link/link.component'

@Component({
    standalone: true,
    selector: 'cmp-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    imports: [CommonModule, LinkComponent],
})
export class HeaderComponent {
    public home$: Observable<string | null> = this.route.queryParamMap.pipe(
        takeUntilDestroyed(),
        map(params => params.get('home')),
    )

    public constructor(private readonly route: ActivatedRoute) {}
}
