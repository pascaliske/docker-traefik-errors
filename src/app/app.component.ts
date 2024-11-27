import { Component, OnInit } from '@angular/core'
import { Router, RouterOutlet } from '@angular/router'
import { NgProgressbar } from 'ngx-progressbar'
import { NgProgressRouter } from 'ngx-progressbar/router'

@Component({
    selector: 'cmp-root',
    templateUrl: './app.component.html',
    imports: [RouterOutlet, NgProgressbar, NgProgressRouter],
})
export class AppComponent implements OnInit {
    public constructor(private readonly router: Router) {}

    public ngOnInit(): void {
        // delayed initial navigation
        setTimeout(() => this.router.initialNavigation())
    }
}
