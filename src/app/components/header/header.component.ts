import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@UntilDestroy()
@Component({
    selector: 'cmp-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    public home$: Observable<string> = this.route.queryParams.pipe(
        untilDestroyed(this),
        map(params => params?.home),
    )

    public constructor(private readonly route: ActivatedRoute) {}
}
