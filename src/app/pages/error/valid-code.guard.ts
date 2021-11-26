import { Injectable } from '@angular/core'
import { CanActivate, Router, ActivatedRouteSnapshot, UrlTree } from '@angular/router'
import { StatusCodes } from 'http-status-codes'

@Injectable({
    providedIn: 'root',
})
export class ValidCodeGuard implements CanActivate {
    public constructor(private readonly router: Router) {}

    /**
     * Checks if the current route has a valid status code appended to it.
     *
     * @param route The route to check.
     * @returns Returns true if the route has a valid status code appended to it.
     */
    public canActivate(route: ActivatedRouteSnapshot): boolean | UrlTree {
        // checks if the code parameter is valid
        if (!/^\d{3}$/.test((route?.queryParams?.code as string) ?? '')) {
            console.info(`No valid error code found, redirecting to ${StatusCodes.NOT_FOUND}.`)

            // redirect to 404 if not valid
            return this.router.createUrlTree([window?.location?.pathname ?? '/'], {
                queryParams: {
                    code: StatusCodes.NOT_FOUND,
                    home: route?.queryParams.home,
                    retry: window?.location?.href,
                },
            })
        }

        // show error page for code parameter
        return true
    }
}
