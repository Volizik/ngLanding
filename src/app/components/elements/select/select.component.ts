import {Component, OnDestroy, OnInit} from '@angular/core';
import {SharedService} from '../../../services/shared.service';
import {IPosition} from '../../../interfaces';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.sass']
})
export class SelectComponent implements OnInit, OnDestroy {

    public positions: IPosition[];
    private positionsSubscription: Subscription;

    constructor(private sharedService: SharedService) {
    }

    ngOnInit(): void {
        this.positionsSubscription = this.sharedService.getPositions().subscribe(data => {
            this.positions = data.positions;
        });
    }

    ngOnDestroy(): void {
        this.positionsSubscription.unsubscribe();
    }

}
