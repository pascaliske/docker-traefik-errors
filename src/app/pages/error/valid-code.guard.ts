import { inject, DOCUMENT } from '@angular/core'
import { Router, ActivatedRoute, UrlTree } from '@angular/router'
import { StatusCodes } from 'http-status-codes'

/**
 * Checks if the current route has a valid status code appended to it.
 *
 * @param route The route to check.
 * @returns Returns true if the route has a valid status code appended to it.
 */
export function ValidCodeGuard(): () => boolean | UrlTree {
    /**
     * Tries to build a retry URL from the current location href.
     *
     * @returns Returns the retry URL string or null.
     */
    const buildRetryUrl: (href: string) => string | null = (href: string) => {
        if (href?.length === 0) {
            return null
        }

        // remove code and retry parameters to prevent infinite loop
        const retry = new URL(href ?? '')
        retry.searchParams.delete('code')
        retry.searchParams.delete('retry')

        return retry.toString()
    }

    return (): boolean | UrlTree => {
        const router: Router = inject(Router)
        const route: ActivatedRoute = inject(ActivatedRoute)
        const doc: Document = inject(DOCUMENT)

        // show empty error page if no code is present
        if (!(route?.snapshot?.queryParamMap?.has('code') ?? false)) {
            return true
        }

        // redirect to not found if no valid code is present
        if (!/^\d{3}$/.test(route?.snapshot?.queryParamMap?.get('code') ?? '')) {
            console.info(`No valid error code found, redirecting to ${StatusCodes.NOT_FOUND}.`)

            // redirect to 404 if not valid
            return router.createUrlTree([doc?.location?.pathname ?? '/'], {
                queryParams: {
                    code: StatusCodes.NOT_FOUND,
                    home: route?.snapshot?.queryParamMap.get('home'),
                    retry: buildRetryUrl(doc?.location?.href),
                },
            })
        }

        // show error page for code parameter
        return true
    }
}
