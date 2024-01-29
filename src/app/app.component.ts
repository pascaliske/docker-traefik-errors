import { Component, OnInit } from '@angular/core'
import { Router, RouterOutlet } from '@angular/router'
import { NgProgressModule } from 'ngx-progressbar'

@Component({
    standalone: true,
    selector: 'cmp-root',
    templateUrl: './app.component.html',
    imports: [RouterOutlet, NgProgressModule],
})
export class AppComponent implements OnInit {
    public constructor(private readonly router: Router) {}

    public ngOnInit(): void {
        // delayed initial navigation
        setTimeout(() => this.router.initialNavigation())
    }
}
