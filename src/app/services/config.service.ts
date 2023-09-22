import { Inject, Injectable} from '@angular/core';
import { RouteConfig } from './routeConfig';
@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(@Inject('RouterConfigToken') private configToken: RouteConfig)  {
    console.log('configService intialized');
    console.log(configToken);
   }
}
