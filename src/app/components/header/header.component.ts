import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { Observable } from 'rxjs'
import { pluck } from 'rxjs/operators'

@UntilDestroy()
@Component({
    selector: 'cmp-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    public home$: Observable<string> = this.route.queryParams.pipe(
        untilDestroyed(this),
        pluck('home'),
    )

    public constructor(private route: ActivatedRoute) {}
}
