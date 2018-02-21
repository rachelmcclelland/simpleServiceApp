import { Injectable } from '@angular/core';

@Injectable()
export class HalfService {

  constructor() { }

  calulateHalf(num: number):number {
    
    return num / 2;
  }
}
