import { InjectionToken } from "@angular/core";
import { Appconfig } from "./appconfig.interface";
import { environment } from '../../environments/environment';
export const APP_SERVICE_CONFIG = new InjectionToken <Appconfig>('app.config');  

export const APP_CONFIG: Appconfig = {
    apiEndPoint:environment.apiEndPoint 
};