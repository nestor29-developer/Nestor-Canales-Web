import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class HomeObservable {
  private dataRes = new BehaviorSubject<any>(null);
  public currentDataRes = this.dataRes.asObservable();

  constructor() {}

  setDataResObs(payload: any) {
    this.dataRes.next(payload);
  }

  getDataResObs(): any {
    return this.dataRes.getValue();
  }

  cleanObservables() {
    this.dataRes.next(null);
  }
}
