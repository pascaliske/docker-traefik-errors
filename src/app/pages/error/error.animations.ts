import type { AnimationStyleMetadata } from '@angular/animations'
import { trigger, transition, style, animate } from '@angular/animations'

export function visible(additional = {}): AnimationStyleMetadata {
    return style({ ...additional, opacity: 1 })
}
export function hidden(additional = {}): AnimationStyleMetadata {
    return style({ ...additional, opacity: 0 })
}

export const animations = [
    trigger('fade', [transition(':enter', [hidden(), animate('.5s .5s ease-out', visible())])]),
    trigger('code', [
        transition(':enter', [
            hidden({ transform: 'translateY(40px)' }),
            animate('.5s .5s ease-out', visible({ transform: 'translateY(0)' })),
        ]),
    ]),
    trigger('message', [
        transition(':enter', [
            hidden({ transform: 'translateY(40px)' }),
            animate('.5s .65s ease-out', visible({ transform: 'translateY(0)' })),
        ]),
    ]),
    trigger('illustration', [
        transition(':enter', [
            hidden({ transform: 'translateY(40px)' }),
            animate('.5s .8s ease-out', visible({ transform: 'translateY(0)' })),
        ]),
    ]),
]
