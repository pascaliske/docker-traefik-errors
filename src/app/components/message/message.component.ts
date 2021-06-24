import { Component, ChangeDetectionStrategy, Input } from '@angular/core'
import { getReasonPhrase, StatusCodes, ReasonPhrases } from 'http-status-codes'

@Component({
    selector: 'cmp-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageComponent {
    @Input()
    public code: StatusCodes = StatusCodes.OK

    /**
     * Returns a reason phrase or error message based on the given status code.
     */
    public get message(): string | ReasonPhrases {
        switch (this.code) {
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
        return getReasonPhrase(this.code)
    }

    public retry(): void {
        window.location.reload()
    }
}
