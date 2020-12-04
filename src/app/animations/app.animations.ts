import { trigger, state, style, animate, transition } from '@angular/animations';

export function expand() {
    return trigger('expand', [
        state('*', style({ opacity: 1 })),
        transition(':enter', [
            style({ opacity:0.5, transform: "scale(0.3, 0.3)" }),
            animate('250ms ease-in', style({ opacity: 1, transform: "scale(1.1, 1.1)"})),
            animate('90ms ease-out', style({ opacity: 1, transform: "scale(1, 1)"}))
        ])
    ]);
}