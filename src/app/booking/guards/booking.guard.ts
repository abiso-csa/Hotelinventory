import { CanDeactivateFn } from '@angular/router';

export const bookingGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return true;
};
