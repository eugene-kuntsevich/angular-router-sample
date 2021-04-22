// TODO: Feature Componetized like CrisisCenter
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {CrisisService} from '../crisis.service';
import {Crisis} from '../crisis';

@Component({
    selector: 'app-crisis-list',
    templateUrl: './crisis-list.component.html',
    styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {
    crises$: Observable<Crisis[]>;
    selectedId: number;

    constructor(private service: CrisisService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.crises$ = this.route.paramMap.pipe(
            switchMap(params => {
                // (+) before `params.get()` turns the string into a number
                this.selectedId = +params.get('id');
                return this.service.getCrises();
            })
        );
    }
}
