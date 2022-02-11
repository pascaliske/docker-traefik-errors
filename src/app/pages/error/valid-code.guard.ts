import { Injectable, Inject } from '@angular/core'
import { DOCUMENT } from '@angular/common'
import { CanActivate, Router, ActivatedRouteSnapshot, UrlTree } from '@angular/router'
import { StatusCodes } from 'http-status-codes'

@Injectable({
    providedIn: 'root',
})
export class ValidCodeGuard implements CanActivate {
    public constructor(
        @Inject(DOCUMENT) private readonly document: Document,
        private readonly router: Router,
    ) {}

    /**
     * Checks if the current route has a valid status code appended to it.
     *
     * @param route The route to check.
     * @returns Returns true if the route has a valid status code appended to it.
     */
    public canActivate(route: ActivatedRouteSnapshot): boolean | UrlTree {
        // show empty error page if no code is present
        if (route?.queryParamMap?.has('code') ?? false) {
            return true
        }

        // redirect to not found if no valid code is present
        if (!/^\d{3}$/.test(route?.queryParamMap?.get('code') ?? '')) {
            console.info(`No valid error code found, redirecting to ${StatusCodes.NOT_FOUND}.`)

            // prepare retry url
            const retry = new URL(this.document.location?.href ?? '')
            retry.searchParams.delete('code')
            retry.searchParams.delete('retry')

            // redirect to 404 if not valid
            return this.router.createUrlTree([this.document.location?.pathname ?? '/'], {
                queryParams: {
                    code: StatusCodes.NOT_FOUND,
                    home: route?.queryParams.home,
                    retry: retry.toString(),
                },
            })
        }

        // show error page for code parameter
        return true
    }
}
