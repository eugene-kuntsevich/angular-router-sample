import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MessageService } from '../message.service';
import { Crisis } from './crisis';
import { CRISES } from './mock-crises';

@Injectable({
  providedIn: 'root',
})
export class CrisisService {
  static nextCrisisId = 100;
  private crises$: BehaviorSubject<Crisis[]> = new BehaviorSubject<Crisis[]>(CRISES);

  constructor(private messageService: MessageService) {
  }

  getCrises(): BehaviorSubject<Crisis[]> {
    return this.crises$;
  }

  getCrisis(id: number | string): Observable<Crisis> {
    return this.getCrises().pipe(
      map(crises => crises.find(crisis => crisis.id === +id)),
    );
  }
}
