import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { NgProgressbar } from 'ngx-progressbar'
import { NgProgressRouter } from 'ngx-progressbar/router'

@Component({
    selector: 'cmp-root',
    templateUrl: './app.component.html',
    imports: [RouterOutlet, NgProgressbar, NgProgressRouter],
})
export class AppComponent {}
