import{InjectionToken} from '@angular/core';

export const localstorageToken = new InjectionToken<any>('localstorage',{
    providedIn:'root',
    factory:()=>{
        return localStorage ;
    },
});