import { TestBed } from "@angular/core/testing";

import{loggerService} from'./logger.service';

describe('loggerservice',()=>{
    let service:loggerService;

    beforeEach(()=>{
        TestBed.configureTestingModule({});
        service= TestBed.inject(loggerService);
    });
    it('should be created',()=>{
        expect(service).toBeTruthy();
    });
});