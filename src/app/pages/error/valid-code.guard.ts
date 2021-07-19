import { Injectable } from '@angular/core'
import { CanActivate, Router, ActivatedRouteSnapshot, UrlTree } from '@angular/router'

@Injectable({
    providedIn: 'root',
})
export class ValidCodeGuard implements CanActivate {
    public constructor(private readonly router: Router) {}

    public canActivate(route: ActivatedRouteSnapshot): boolean | UrlTree {
        // checks if the code parameter is valid
        if (!/^\d{3}$/.test(route?.params?.code ?? '')) {
            console.info('Parameter :code is not a valid error code, redirecting to 404.')

            // redirect to 404 if not valid
            return this.router.createUrlTree(['/404'], {
                queryParams: {
                    home: route?.queryParams.home,
                    retry: window?.location?.href,
                },
            })
        }

        // show error page for code parameter
        return true
    }
}
