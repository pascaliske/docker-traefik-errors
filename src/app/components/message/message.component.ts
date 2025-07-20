import { Component, ChangeDetectionStrategy, input, output } from '@angular/core'
import { StatusCodes, ReasonPhrases, getReasonPhrase } from 'http-status-codes'
import { LinkComponent } from 'components/link/link.component'

@Component({
    selector: 'cmp-message',
    templateUrl: './message.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [LinkComponent],
})
export class MessageComponent {
    public readonly code = input<StatusCodes>(StatusCodes.OK)

    public readonly retry = output()

    /**
     * Only show message if the status code is between 400 and 599.
     */
    public get show(): boolean {
        return this.code() >= (400 as StatusCodes) && this.code() <= (599 as StatusCodes)
    }

    /**
     * Returns a reason phrase or error message based on the given status code.
     */
    public get message(): string | ReasonPhrases {
        const code = this.code()
        switch (code) {
            // 401
            case StatusCodes.UNAUTHORIZED:
                return 'You are not authenticated. Please authenticate and try again.'

            // 403
            case StatusCodes.FORBIDDEN:
                return 'You are forbidden from accessing the requested resource.'

            // 404
            case StatusCodes.NOT_FOUND:
                return 'The requested resource was not found.'

            // 418
            case StatusCodes.IM_A_TEAPOT:
                return `I'm a teapot.`

            // 500
            case StatusCodes.INTERNAL_SERVER_ERROR:
                return 'The server has encountered an error.'

            // 502
            case StatusCodes.BAD_GATEWAY:
                return 'The server received an invalid response from the upstream server.'

            // 503
            case StatusCodes.SERVICE_UNAVAILABLE:
                return 'The requested resource is currently unavailable.'
        }

        // default reason phrases
        return getReasonPhrase(code)
    }
}
